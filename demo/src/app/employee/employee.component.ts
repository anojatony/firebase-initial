import { Component, OnInit } from '@angular/core';
import {DemoService, Employee} from '../demo.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee[]=[]

  constructor(private demoService:DemoService) { }

  ngOnInit(): void {
    this.getEmployee()
  }
  getEmployee(){
    this.demoService.getEmployee().subscribe((data)=>{
      this.employee=data.map((e)=>{
        return{
          id:e.payload.doc.id,
          ...(e.payload.doc.data()) as {}
    
        } 
      
      })
      })
   
  }

  delete(id:any){
this.demoService.deleteEmployee(id)
  }

}
