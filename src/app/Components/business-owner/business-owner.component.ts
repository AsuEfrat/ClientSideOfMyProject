import { Component, OnInit, Input } from '@angular/core';
import { BusinessOwner } from 'src/app/Models/businessOwner';
import { BusinessOwnerService } from 'src/app/Services/business-owner.service';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { Chains } from 'src/app/Models/chains';
import { ClubCards } from 'src/app/Models/ClubCards';
import { cardType } from 'src/app/Models/cardType';
import { StoresForCards } from 'src/app/Models/StoresForCards';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-business-owner',
  templateUrl: './business-owner.component.html',
  styleUrls: ['./business-owner.component.css']
})
export class BusinessOwnerComponent implements OnInit {
 businessOwner:BusinessOwner=new BusinessOwner();
 customer:Customer=new Customer();
 chain:Chains=new Chains();
 cardType:cardType=new cardType();
 storesforcards:StoresForCards=new StoresForCards();
messageForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private businessOwnerService:BusinessOwnerService,private customerService:CustomerService ) { }

  ngOnInit() {
    this.messageForm =this.formBuilder.group({
      name: new FormControl('', [Validators.required,Validators.pattern('[A-Za-zא-ת]{1,15}')]),
      webName:new FormControl('',[Validators.required,Validators.pattern('[.A-Za-zא-ת]{1,15}')]),
      storeName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-zא-ת]{1,15}')]),
      cardName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-zא-ת]{1,15}')]),
      id: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      joinDate: new FormControl('', [Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      PersonalEmail: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      valid:new FormControl('',[Validators.required,Validators.pattern(/^\d{2}$/)]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z0-9]\w{5,14}$/)])
     });
  }

  register(logoInput)
  {
    debugger
    if(!this.chain.ChainName)//מוסיף מנהל ללא חנות-DREAMCARD
      {
        this.customerService.addCustomer(this.customer).subscribe(
          res=>{
            this.customerService.currentCustomer=res;
            alert(res);
            this.businessOwner.customerCode=res;
            debugger
            this.businessOwnerService.addCardType(this.cardType,logoInput.files[0]).subscribe(
              r=>{this.businessOwner.CardTypeCode=r
                  this.businessOwnerService.addBusinessOwner(this.businessOwner).subscribe();});
              });
      }
      else//מוסיףמנהל חדש עם כרטיס חדש וחנות חדשה
      {
       this.customerService.addCustomer(this.customer).subscribe(
        res=>{
          this.customerService.currentCustomer=res;
          alert(res);
          this.businessOwner.customerCode=res;
          this.businessOwnerService.addCardType(this.cardType,logoInput.files[0]).subscribe(
            ctcode=>{this.storesforcards.CTCode=ctcode;
                     this.businessOwner.CardTypeCode=ctcode;
                     this.businessOwnerService.addBusinessOwner(this.businessOwner).subscribe();
                     this.businessOwnerService.addChain(this.chain).subscribe(
                     r=>{this.storesforcards.ChainCode=r;       
                         this.businessOwnerService.addStoresForCards(this.storesforcards).subscribe();});
                    });
             });
      }


      
  }
  


//   DreamCardClub()//מוסיף DreamCard
//   {
  
//     this.customerService.addCustomer(this.customer).subscribe(
//       res=>{
//           this.customerService.currentCustomer=res;
//           alert(res);
//           this.businessOwner.customerCode=res;
//           this.businessOwnerService.addBusinessOwner(this.businessOwner).subscribe();
//           this.businessOwnerService.addCardType(this.cardType).subscribe(
//             ctcode=>{this.storesforcards.CTCode=ctcode;
//                      this.businessOwnerService.addChain(this.chain).subscribe( 
//                       r=>{this.storesforcards.ChainCode=r;
//                           this.businessOwnerService.addStoresForCards(this.storesforcards).subscribe()})
//                     });  
//          });
// this.anotherchain=true;
// }

// addAnotherChain()//כדי להוסיף עוד חנות לדרים קארד מאפס את נתוני חנות שמופיעים במסך
// {

// this.chain.ChainName='';
// this.chain.ChainWebsite='';
// this.chain.PhoneNumber=0;
// this.addthischain=true;
// }
// addThisChain()//מוסיף חנות נוספת לדרים קארד
// {
 
// this.businessOwnerService.addChain(this.chain).subscribe( 
//   r=>{this.storesforcards.ChainCode=r
//   this.businessOwnerService.addStoresForCards(this.storesforcards).subscribe()})
// }
}