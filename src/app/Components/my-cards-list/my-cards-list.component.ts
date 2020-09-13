import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { EventEmitter } from '@angular/core';
import { ClubCardsService } from 'src/app/Services/club-cards.service';
import { ClubCards } from 'src/app/Models/ClubCards';
import { StoresForCards } from 'src/app/Models/StoresForCards';
import { Button } from 'protractor';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-cards-list',
  templateUrl: './my-cards-list.component.html',
  styleUrls: ['./my-cards-list.component.css']
})
export class MyCardsListComponent implements OnInit {
 clubcard:ClubCards[]=[];
 AllClubCardsNames:string[]=[];
 clubcardsTcode:number[]=[];
 customerDCode:number; 
 i:number;
 cusdetailscode:number;
  constructor(private router:Router,private clubCardsService:ClubCardsService,private customerService:CustomerService) { }

  ngOnInit() {
    
    this.cusdetailscode=this.customerService.ThisCustomer.CDCode;
     this.clubCardsService.getAllClubCards( this.cusdetailscode).subscribe(
    res=>{this.clubcard=res;
      this.findChainNamebyCardTypeCode();
    }
  );
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
      r=>this.AllClubCardsNames=r
    );
  }

  mycardsdetails(chainname:string)
  {
    
    this.router.navigate(['/cardDetailsAndSales',chainname]);
  }
   next()
   {
    this.router.navigate(['/allclubcards']); 
   }


 
}

