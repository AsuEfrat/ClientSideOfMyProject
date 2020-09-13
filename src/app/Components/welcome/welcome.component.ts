import { Component, OnInit } from '@angular/core';
import { Welcome } from 'src/app/Models/welcome';
import { CustomerService } from 'src/app/Services/customer.service';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/Models/customerDetails';
import { Customer } from 'src/app/Models/customer';
import { BusinessOwner } from 'src/app/Models/businessOwner';
import { is } from 'typescript-is';
import { SalesService } from 'src/app/Services/sales.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
welcome:Welcome=new Welcome();
selectedUser:string;



  constructor(private customerService:CustomerService,private salesService:SalesService ,private router:Router) { }

  ngOnInit() {
    let btn = document.getElementById("create");
    if(btn)
    btn.addEventListener("click", (e:Event) => this.selected(this.selectedUser));
  }

  check(c:string)
  {
    if (this.selectedUser=="usr"&&c=="bsn") {
      document.getElementById(c).style.webkitBoxShadow="0 0 5px dodgerblue";
      document.getElementById(this.selectedUser).style.webkitBoxShadow="0 0 0px dodgerblue";
    }
    if (this.selectedUser=="bsn"&&c=="usr") {
      document.getElementById(c).style.webkitBoxShadow="0 0 5px dodgerblue";
      document.getElementById(this.selectedUser).style.webkitBoxShadow="0 0 0px dodgerblue";
    }
      document.getElementById(c).style.webkitBoxShadow="0 0 5px dodgerblue";
    this.selectedUser=c;
  }
  selected(name:string){

  if(name=="bsn"){
    this.router.navigate(['businessOwner']);
  }
  if(name=="usr"){
  this.router.navigate(['/addcustomer']);
}
}

    



  register()
  {
    
   this.customerService.getCustomerByNameAndPasswordReturnCusOrMan(this.welcome).subscribe(
   cu =>{
     
  if(cu==null)
   alert("שם המשתמש או הסיסמה שהקשת אינם נכונים");
  else
  {
    if(cu.hasOwnProperty('CDCode') )
    {
      this.customerService.ThisCustomer=cu;
      this.router.navigate(['/userPersonalHomePage']);
    }
     else
   {
     if(cu.hasOwnProperty('BusinessCode') )
     {
     this.salesService.customer=cu;
     this.router.navigate(['cardOwner']);
     }
   }
  
 } 
  });
}
}
