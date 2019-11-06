import { Component, OnInit } from '@angular/core';
import { BusinessOwner } from 'src/app/Models/businessOwner';
import { BusinessOwnerService } from 'src/app/Services/business-owner.service';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-business-owner',
  templateUrl: './business-owner.component.html',
  styleUrls: ['./business-owner.component.css']
})
export class BusinessOwnerComponent implements OnInit {
 businessOwner:BusinessOwner=new BusinessOwner();
 customer:Customer=new Customer();
  
  constructor(private businessOwnerService:BusinessOwnerService,private customerService:CustomerService) { }

  ngOnInit() {
  }

  register()
  {
    debugger
    this.customerService.addCustomer(this.customer).subscribe(
      res=>{
        this.customerService.currentCustomer=res;
          alert(res);
         this.businessOwner.CustomerCode=res}
         );
    
   this.businessOwnerService.addBusinessOwner(this.businessOwner);
  }

}
