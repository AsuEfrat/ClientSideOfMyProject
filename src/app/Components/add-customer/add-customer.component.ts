import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { error } from 'util';
import { CustomerDetails } from 'src/app/Models/customerDetails';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:Customer=new Customer();
  customerDetails:CustomerDetails=new CustomerDetails();
  messageForm:FormGroup;
  constructor( private formBuilder: FormBuilder,private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
     this.messageForm =this.formBuilder.group({
      name: new FormControl('', [Validators.required,Validators.pattern('[A-Za-zא-ת]{1,15}')]),
      lastName: new FormControl('', [Validators.required,Validators.pattern('[A-Za-zא-ת]{1,15}')]),
      UserName: new FormControl('', [Validators.required,Validators.pattern('[A-Za-zא-ת]{1,15}')]),
      id: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      joinDate: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]),
      joinDate2: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z0-9]\w{5,14}$/)])
    });
  }

  register()
  { 
    
    this.customerService.addCustomer(this.customer).subscribe(
    res=>{
         this.customerService.currentCustomer=res;
           alert(res);
          this.customerDetails.customerCode=res;
          this.customerService.addCustomerDetails(this.customerDetails).subscribe();
          alert("נרשמת בהצלחה");
        } );
          this.router.navigate(['']);
   
    
    }

}
