import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule, NgxSpinnerModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {

  private employeeService = inject(EmpleadoService);
  private router = inject(Router);
  spinnerService = inject(NgxSpinnerService);

  empleado: Empleado = {
    idEmpleado: 0,
    nombre: '',
    departamento: '',
    sueldo: 0
  };

  save = false;
  error = '';

  ngOnInit(): void {
  }

  guardar(): void {

    if (this.save) return;
    this.save = true;
    this.error = '';

    const {idEmpleado, ...payload} = this.empleado;
    this.spinnerService.show();
    this.employeeService.addEmployee(payload as Empleado).subscribe({
      next: () => {this.router.navigate(['/employees']),
              this.spinnerService.hide();
      },
      error: (err:any) => {
        this.error = 'No se pudo guardar la informacion';
        console.error(err)
        this.save = false;
        }
    });
  }

}
