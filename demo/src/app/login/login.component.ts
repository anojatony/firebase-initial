import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private demoService:DemoService) { }

  ngOnInit(): void {
  }
login(email:any,pwd:any){
this.demoService.login(email,pwd).catch((err:any)=>{
  alert(err)
})
}

logout(){
  this.demoService.logout()
}

}
