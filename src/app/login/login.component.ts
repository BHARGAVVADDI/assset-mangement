import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginResponse } from '../login-response';
import { MyAppService } from '../my-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:Login = new Login('','');
  responseStatus:LoginResponse=<LoginResponse>{}
  errorResponse:any;

  constructor(private router:Router,private appService:MyAppService) { }
formSubmit(){
  this.data.saveData(this.data);
  
 
  console.log(this.data);
  this.appService.doLoginAction(this.data).subscribe((data)=>{
    this.responseStatus=data;
    localStorage.setItem('all_users',JSON.stringify(data));
    if(this.responseStatus.username != 'invalid'&&this.responseStatus.role=="User"){
      console.log(localStorage.getItem('all_users'))
      this.router.navigate([`${'home'}`]);
    }
   
  }
  ,
  error=>{
    this.errorResponse=error;
    alert(this.errorResponse.error.errorMsg + "PLEASE REGISTER");
    
  }
  );

}
  ngOnInit(): void {
  }

}
