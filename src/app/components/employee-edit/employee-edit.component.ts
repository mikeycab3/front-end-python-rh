import { Empleado } from './../../models/empleado';
import { Component, inject } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule,NgxSpinnerModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {

  private employeeService = inject(EmpleadoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  spinnerService = inject(NgxSpinnerService);

  employee!: Empleado;

  id = 0;
  cargando = false;
  guardando: boolean = false;;
  error = '';

  empleado:Empleado = {
     idEmpleado: 0,
     nombre: '',
     departamento: '',
      sueldo:0
  }

  // form = this.fb.group({
  //   idEmpleado:[0],
  //   nombre:['',[Validators.required, Validators.minLength(3)]]
  // })

  ngOnInit(): void {
   const idParam = Number(this.route.snapshot.paramMap.get('id'));
   this.id = Number(idParam);
   if(!this.id){
     this.error = 'Id invalido';
     this.cargando = false;
     return;
   }
   this.loadEmployee(this.id);
  }

   loadEmployee(id:number){
    this.spinnerService.show();
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        this.empleado = data;
        this.cargando = false;
        this.spinnerService.hide();
      },
      error: err => {
      console.log('Error al cargar empleado', err);
      this.error = 'No se pudo cargar el empleado';
      this.cargando = false;
      }
    });
   }

   saveEmployee(){
    console.log('guardar datos')
    const {idEmpleado, ...payload} = this.empleado
    this.employeeService.editEmployee(this.id, payload as Empleado).subscribe({
      next: ()=> this.router.navigate(['/employees']),
      error: err=> {console.error('Error al actualizar', err),
        this.error = 'No se pudo guardar los datos';
        this.guardando = false;
      }
    })
   }

   onSubmit(){
    console.log('onSubmit')
    //  if(this.guardando || this.id) return;
    //     this.guardando = true;
    //     this.error = '';

        this.saveEmployee();
   }

}
