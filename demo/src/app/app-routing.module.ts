import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'add',component:AddComponent},
   {path:'edit/:id',component:EditComponent},
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
