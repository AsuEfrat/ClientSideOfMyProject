import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChainNameAndSales } from 'src/app/Models/ChainNameAndSales';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/Services/sales.service';
import {Location} from '@angular/common';
import { ClubCardsService } from 'src/app/Services/club-cards.service';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent implements OnInit {
subscription:Subscription;
CustomerSpecialSales:ChainNameAndSales[];
i:number=0;
count:number=0;
validationCards:string[];
FirstName:string;
  constructor(private clubCards:ClubCardsService,private customerService:CustomerService, private location:Location, private route:ActivatedRoute,private salesService:SalesService) { }

  ngOnInit() {
    this.FirstName=this.customerService.ThisCustomer.FirstName; 
   this.CustomerSpecialSales=this.salesService.SpecialSales;
   this.validationCards=this.clubCards.ValidationMessages;
  
   for(let item of this.CustomerSpecialSales)
    {
     this.count=item.allSpecialSales.length;
      for(this.i=0;this.i<this.count;this.i++)
        item.allSpecialSales[this.i].Image=('https://localhost:44380/Images/'+item.allSpecialSales[this.i].Image);
    }
  }

  

}
