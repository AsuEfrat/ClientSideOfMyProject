import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { error } from 'util';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

  register()
  {
    this.customerService.addCustomer(this.customer).subscribe(
         res=>{
           this.customerService.currentCustomer=res;
           alert(res)
        }
    )
  }

}
