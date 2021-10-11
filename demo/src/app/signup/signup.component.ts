import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private demoService:DemoService) { }

  ngOnInit(): void {
  }
  signup(email:any,pwd:any){
    this.demoService.signup(email,pwd)
  }

}
