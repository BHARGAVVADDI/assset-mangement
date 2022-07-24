import { Component, OnInit } from '@angular/core';
import { MyAppService } from '../my-app.service';
import { Releasedetails } from '../releasedetails';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {
  data1:any=JSON.parse(localStorage.getItem("all_users")||"")
  released = {} as Releasedetails
  hidebutton:any[]=[]
  
  constructor(private appService:MyAppService) { }
  release(id:string){
    this.released.id=parseInt(id)
    this.released.status="pending"
    this.appService.releaseRequest(this.released).subscribe((data)=>{
      console.log(data);
    })
  this.hidebutton[parseInt (id)]=true
   alert("request released succesfully")
    }
     
  
  ngOnInit(): void {
    console.log(this.data1.requests)
  }

}
