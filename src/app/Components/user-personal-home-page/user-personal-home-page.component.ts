import { Component, OnInit } from '@angular/core';
import { cardType } from 'src/app/Models/cardType';
import { ClubCardsService } from 'src/app/Services/club-cards.service';
import { ClubCards } from 'src/app/Models/ClubCards';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { ChainNameAndSales } from 'src/app/Models/ChainNameAndSales';
import { SalesService } from 'src/app/Services/sales.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ValidCard } from 'src/app/Models/ValidCard';
import { validationMassages } from 'src/app/Models/ValidationMassages';

@Component({
  selector: 'app-user-personal-home-page',
  templateUrl: './user-personal-home-page.component.html',
  styleUrls: ['./user-personal-home-page.component.css']
})
export class UserPersonalHomePageComponent implements OnInit {
  allClubCards:cardType[];
  clubcard:ClubCards[]=[];
 AllClubCardsNames:string[];
 clubcardsTcode:number[]=[];
 customerDCode:number; 
 i:number;
 j:number;
 cusdetailscode:number;
 currentCustomer:any;
SpecialSales:ChainNameAndSales[];
SpecialSalesNumber:number=0;
count:number;
user:any;
validcard:ValidCard[]=[];
img:string;
  constructor(private router:Router,private clubCardsService:ClubCardsService,private customerService:CustomerService,private salesService:SalesService) { }

  ngOnInit() {
    this.currentCustomer= this.customerService.ThisCustomer;
    this.salesService.GetSpecialSalesByCustomerDetailsCode(this.currentCustomer.CDCode).subscribe(
      res=>{this.salesService.SpecialSales=res;
           this.SpecialSalesNumber=res.length;
           this.clubCardsService.checkValidity(this.currentCustomer.CDCode).subscribe(
             r=>{this.SpecialSalesNumber+=r.length;
              this.clubCardsService.ValidationMessages=r;
             }
           )
           });
    this.cusdetailscode=this.customerService.ThisCustomer.CDCode;
    this.clubCardsService.getAllClubCards( this.cusdetailscode).subscribe(
     res=>{this.clubcard=res;
     this.findChainNamebyCardTypeCode();
   });
   this.user=this.customerService.ThisCustomer;
  }


  findChainNamebyCardTypeCode()//שולח מערך של כל הקוד סוג כרטיס וע"י זה מחזיר מערך של כל שמות המועדונים
  { 
     
    this.i=0;
    for(let item of this.clubcard)//מכניס למערך את כל הקוד סוג כרטיס של לקוח זה 
    {
      this.clubcardsTcode[this.i]=item.TCode;
      this.i++;
    }
    this.clubCardsService.findChainNamebyCardTypeCode(this.clubcardsTcode).subscribe(
      r=>{this.AllClubCardsNames=r;
         this.clubCardsService.getSpesificCardTypes(this.AllClubCardsNames).subscribe(
          res=>{ debugger
            this.allClubCards=res;
            // this.validcard=new ValidCard[this.allClubCards.length];
            this.j=0;
          for(var item of this.allClubCards)
             {
               this.validcard[this.j]=new ValidCard();
               this.validcard[this.j].chainName=item.TypeName;
               for(var it of this.clubcard)
                if (it.TCode==item.TCode)
                {
                 
                  var Joindate=new Date(it.JoinDate);
                   var currentDate = new Date();
                   var day = currentDate.getDate();
                   var month = currentDate.getMonth() + 1;
                   var today = currentDate.getFullYear() + "-" + (month) + "-" + (day);
                   var todaydate =new Date(today);
                  Joindate.setMonth(Joindate.getMonth()+item.ValidFor);
                   if(Joindate>=todaydate)
                  {
                     this.validcard[this.j].zamin=true;
                    this.j++;
                  }
                  else
                   {
                    this.validcard[this.j].zamin=false;
                    this.j++;
                   }
                }
             }
            }
        )
      }
    );
  }

  mycardsdetails(typename:string)
  {
    for(var i of this.allClubCards)
    {
      if(i.TypeName==typename)
        this.img=i.logo;
    }
    for(var item of this.validcard)
    {
      if(item.chainName==typename)
        if(item.zamin==true)
         this.router.navigate(['/cardDetailsAndSales',typename,this.img]);
        else
         this.router.navigate(['/expired']);
    }
   
  }
  
   next()
   {
    this.router.navigate(['/allclubcards']); 
   }

   massages()
   {
     this.router.navigate(['/massages']);
   }

   doch()
   {
    this.router.navigate(['/reports',true]);
   }
}
