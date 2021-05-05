import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { NewModulModule } from './new-modul/new-modul.module';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmpComponent,
    EmpListComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NewModulModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
