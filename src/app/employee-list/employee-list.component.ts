import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
 
  }
    //its may this function dosn't work because the cros origin ressource charing 
    //=> accepte to show result just for someone in the same website
    //this link can help you
    //https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
    //btw this probleme is comming from the spring boot (is not a probleme) 

  private getEmployees(){
    this.employeeService.getListEmployees().subscribe(data=>{
      this.employees = data;     
    });
  }

  goToUpdate(id:number){
    //put
    this.router.navigate(['employees',id])
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(message=>{
      console.log(message);
      this.getEmployees();
    })
  }

  goToDetails(id:number){
    //get
    this.router.navigate(['employee-details',id]);
  }
  

}
