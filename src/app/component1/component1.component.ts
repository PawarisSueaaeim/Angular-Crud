import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  userNameForm = new FormControl();
  employeeIDForm = new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]);
  departmentForm = new FormControl();
  skillForm = new FormControl();
  salaryForm = new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]);

  
  myObject: Array<any> = [];


  ngOnInit(): void {
  }

  onClick(){

    if(this.employeeIDForm.invalid){
      return ;
    }

    let customer = {
      employeeID: this.employeeIDForm.value,
      name: this.userNameForm.value,
      department: this.departmentForm.value,
      skill: this.skillForm.value,
      salary: this.salaryForm.value,
    }
    this.myObject.push(customer)
    console.log(this.myObject)
  }

  removeCustomer(index: number){
    this.myObject.splice(index, 1)
  }

  editing(index: number){
    
  }
}
