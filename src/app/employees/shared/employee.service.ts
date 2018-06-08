import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selecterEmployee : Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }

  getDate(){
    this.employeeList = this.firebase.list('employee');
    return this.employeeList;
  }

  insertEmployee(employee: Employee){
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    })
  }
}
