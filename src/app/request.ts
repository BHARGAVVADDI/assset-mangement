export class Request {
    projectname:string
    employee:Employee
    address:string
    productName:string
    
   
  
    constructor(projectname:string,employee:Employee,address:string,productName:string){
        this.projectname=projectname
        this.employee=employee
        this.address=address
        this.productName=productName
       
    
    }
}
export interface Employee{
    id:number,
    firstname:string,
    lastname:string,
    emailId:string,
    username:string,
    password:string,
    role:string,
    
}
