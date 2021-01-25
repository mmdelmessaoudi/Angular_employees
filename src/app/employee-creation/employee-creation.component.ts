import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.css']
})
export class EmployeeCreationComponent implements OnInit {
  employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {

  }

  //i dont use this function directly because i need to do rediriction 
  //so i use an auther function to do the work ,the reson it this function may i could use i in the futur
  saveEmployee(){
    this.employeeService.creatEmployee(this.employee).subscribe();
  }

  goToListEmployees(){
    this.router.navigate(['employees'])
  }

  createmployee(){
    this.goToListEmployees();
    this.saveEmployee();
  }

}
