import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { LoginComponent } from './core/auth/login/login.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';

export const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'employees', component: EmployeeListComponent},
  {path:'employees-add', component:EmployeeAddComponent},
  {path:'edit-employee/:id', component:EmployeeEditComponent},
  {path:'landing', component:LandingPageComponent},
  {path:'', redirectTo:'landing', pathMatch:'full'}
];
