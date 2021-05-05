import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';


const routes: Routes = [
  {
    path:' ', component:AppComponent
  },{
  path:'create', component:CreateEmpComponent
},{
  path:'empList' , component:EmpListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
