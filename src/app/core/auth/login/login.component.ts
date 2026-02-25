
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]],
      nombre:['', [Validators.required]]
    })
  }

   get f(){
     return this.loginForm.controls;
   }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return
    }

    console.log(this.loginForm.value)
  }

}
