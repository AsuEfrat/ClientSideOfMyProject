import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SalesComponent } from '../sales/sales.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/Services/customer.service';
import { SalesService } from 'src/app/Services/sales.service';
import { ClubCards } from 'src/app/Models/ClubCards';
import { ClubCardsService } from 'src/app/Services/club-cards.service';
import { parse } from 'querystring';
import {Location} from '@angular/common';
import { Chain } from '@angular/compiler';
import { Chains } from 'src/app/Models/chains';

@Component({
  selector: 'app-card-details-and-sales',
  templateUrl: './card-details-and-sales.component.html',
  styleUrls: ['./card-details-and-sales.component.css']
})
export class CardDetailsAndSalesComponent implements OnInit, OnDestroy {
 
 
  subscription:Subscription;
  typeName:string;
  clubcard:ClubCards;
  ThisChain:Chains=new Chains();
  Tokef:number;
ValidFor:Date;
NotConected:boolean=true;
FirstName:string;
img:string;
allStores:string[];
  constructor(private location:Location,private router:Router, private route:ActivatedRoute,private clubcardservice:ClubCardsService,private customerService:CustomerService,private saleService:SalesService) { }

  ngOnInit() {
    this.FirstName=this.customerService.ThisCustomer.FirstName;  
 this.subscription=this.route.params.subscribe((params)=>
 {
    this.typeName=params['p1'];
    this.img=params['img'];
    this.clubcardservice.getClubCardByChainName(this.typeName,this.customerService.ThisCustomer.CDCode).subscribe(
       res=>{
         debugger
         this.clubcard=res;
         var joindate=this.clubcard.JoinDate;
        // if((joindate.getFullYear())<1000)
        // {
        //  this.NotConected=false;
        // }
        // else
        // {
        this.clubcardservice.GetValidatyByCTypeCode(this.clubcard.TCode).subscribe(
          re=>{this.Tokef=re;
            
            var Validaty=new Date(this.clubcard.JoinDate);
           Validaty.setMonth(Validaty.getMonth()+this.Tokef);
           this.ValidFor=Validaty;
            
        this.clubcardservice.GetChainByChainName(this.typeName).subscribe(
          r=>{debugger
            
               this.ThisChain=r;
                this.clubcardservice.GetAllStores(this.typeName).subscribe(
                r=>{debugger
                  this.allStores=r;})})
             });
        // }
       
       } );
     

  });
   }

  

    getSales()
    {
      debugger
   
      this.saleService.GetSalesByCardTypeCode(this.clubcard.TCode,this.customerService.ThisCustomer.CDCode).subscribe(
       res=>{this.saleService.ClubSale=res;
        this.router.navigate(['sales',this.typeName,this.img]);
       }
      );
    }

  ngOnDestroy(){
       this.subscription.unsubscribe;
  }

}
