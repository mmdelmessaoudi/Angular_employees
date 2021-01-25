import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee:Employee = new Employee();

  id:number;
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['id'];
   this.employeeService.getEmployeeById(this.id).subscribe(data=>{
     this.employee = data;
     
   })    
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
    //this.router.navigate(['employees']);
    });
  }

  update(){
    this.updateEmployee();
    //we can use it in inside subscribe also
    this.router.navigate(['employees']);
  }

  

}
