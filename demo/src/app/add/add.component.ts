import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DemoService, Employee} from '../demo.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private demoService:DemoService) { }

  ngOnInit(): void {
  }

 add(form:NgForm){
let employee:Employee={
  name:form.value.name,
  email:form.value.email
}
this.demoService.addEmployee(employee)
 } 
}
