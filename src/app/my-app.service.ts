import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { LoginResponse } from './login-response';
import { Releasedetails } from './releasedetails';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {
 rootendpoint:string="http://localhost:8080/login"
 loginendpoint:string=this.rootendpoint+"/employee"
 rootEndpoint1:string="http://localhost:8080/requests"
 requestEndpoint:string=this.rootEndpoint1+"/request"
 DeleteEndpoint:string=this.rootEndpoint1+"/delete"
 status:string="pending"
  constructor(private http:HttpClient) { }

  doLoginAction(loginDetails:Login):Observable<LoginResponse>
{
  return this.http.post<LoginResponse>(`${this.loginendpoint}`,loginDetails);
}
doRequest(requested:Request):Observable<any>{
  return this.http.post<any>(`${this.requestEndpoint}`,requested)
}
releaseRequest(release:Releasedetails):Observable<any>{
  console.log(release)
  return this.http.post<any>(`${this.DeleteEndpoint}`,release)
}
dologout(){
  return this.http.get(`${this.loginendpoint+'/logout'}`)
}
}


