import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EmpComponent } from './emp/emp.component';



@NgModule({
  declarations: [
    EmpComponent
  ],
  imports: [
    
    CommonModule
  ]
})
export class NewModulModule { }
