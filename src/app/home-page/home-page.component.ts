import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppService } from '../my-app.service';
import { Employee, Request } from '../request';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  display:string=""
 name:string=""
 email:string=""
 data:any=JSON.parse(localStorage.getItem("all_users")||"")
emp1:Employee={
  id:this.data.id,
  firstname:this.data.firstName,
  lastname:this.data.lastName,
  emailId:this.data.emailId,
  username:this.data.username,
  password:this.data.password,
  role:this.data.role,


}
  request:Request=new Request("",this.emp1,"","")

    constructor(private router:Router,private appService:MyAppService) { }

  formOpen(){
    this.display="block"
    
  
    
   
  }
  formClose1(){
    this.display="none"

  }
  formClose2(){
    this.display="none"
    console.log(this.request)
    this.appService.doRequest(this.request).subscribe((data)=>{
      console.log(data);
    })
    this.data.requests.push(this.request)
    localStorage.setItem("all_users",JSON.stringify(this.data))
  }
  allRequests(){
    
    this.router.navigate([`${'allRequests'}`])
  }
  logout(){
    this.appService.dologout().subscribe((data)=>{
      console.log(data)

    })
    this.router.navigate([`${'login'}`])
    localStorage.clear()
  }
  ngOnInit(): void {
  }

}
