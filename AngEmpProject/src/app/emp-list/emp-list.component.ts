import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Employee } from '../employee';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees:Employee[]=[];
  employees2:Employee[]=[];
  name ='nameee';
  searchVal:boolean = true;
  constructor(private myService:MyServiceService,private router:Router) { }

  ngOnInit(): void {
    this.myService.getEmployees().subscribe(data=>this.employees = data);
  }

  search(){
    this.searchVal = false;
    for(let emp of this.employees){
      if(emp.ename === this.name){
        this.employees2.push(emp);
      }
    }
  }
  deleteEmp(eid:number){
    this.myService.deleteEmployee(eid).subscribe();
    alert("delete Employee Succesfully");
    location.reload();
  }
}
