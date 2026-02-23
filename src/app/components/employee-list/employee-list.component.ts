import { Component, inject, signal } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../desing-atomic/button/button.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employeesList = signal<Empleado[]>([]);
  private employeeService = inject(EmpleadoService)

  //Para deshabilitar botones mientras se elimina
  deleteById = signal<number | null>(null);

  ngOnInit(): void {
    this.loadData();

  }

  loadData(){
    this.employeeService.getEmployee().subscribe(data=>{ this.employeesList.set(data)})
  }

  deleteEmployeeById(id:any){
    const employee = this.employeesList().find(e =>{ e.idEmpleado === id});
    const name = employee ? employee.nombre : `Id ${id}`;
    if (!confirm(`¿Seguro que deseas eliminar al empleado:${name}?`)){
      return;
    }

    this.deleteById.set(id);
    this.employeeService.deleteEmployee(id).subscribe({
      next: ()=>{
        this.loadData();
        this.deleteById.set(null);
      },
      error: (e)=>{
        console.log('No se pudo eliminar',e);
        this.deleteById.set(null);
        alert('No se pudo eliminar')
      }
    })
  }

}
