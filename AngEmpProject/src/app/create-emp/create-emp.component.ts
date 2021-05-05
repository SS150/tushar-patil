import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  Cemp!: Observable<Employee>;
  submitted=false;
  employee:Employee=new Employee(0,"","");
  constructor(private router:Router, private myService:MyServiceService) { 

  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.submitted = true;
      this.Cemp=this.myService.createEmployee(this.employee);
      this.Cemp.subscribe(data=>alert("Employee created successfully."));
     
    this.router.navigate(['empList']);
  }

}
