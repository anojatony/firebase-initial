import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DemoService, Employee} from '../demo.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any
 employee:any;
 empid:any


  constructor(private  demoService:DemoService,private route:ActivatedRoute) { }

  ngOnInit(): void {

   this.id=this.route.snapshot.paramMap.get('id')
   this.demoService.getEditemployee(this.id).subscribe((res)=>{
    this.employee=res.payload.data();
    this.empid=res.payload.id
      
    
  })
  }

  edit(){
  this.demoService.updateEmployee(this.empid,this.employee)
  }

}
