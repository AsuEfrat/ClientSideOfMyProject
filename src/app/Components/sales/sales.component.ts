import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SalesService } from 'src/app/Services/sales.service';
import { Sale } from 'src/app/Models/Sale';
import { SaleAndImg } from 'src/app/Models/SaleAndImg';
import {Location} from '@angular/common';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-sales',
  
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
clubsale:Sale[];
urlToImage:string; 
chainWeb:string;
img:string;
chainname:string;
subscription:Subscription;
FirstName:string;
constructor(private router:Router,private customerService:CustomerService,private location:Location,private route:ActivatedRoute,private saleService:SalesService) { }

 
 ngOnInit() {
  this.FirstName= this.customerService.ThisCustomer.FirstName;
  this.subscription=this.route.params.subscribe((params)=>
  {
     this.chainname=params['chainname'];
     this.img=params['img'];
     debugger
     this.clubsale=this.saleService.ClubSale;
     this.saleService.GetChainWeb(this.clubsale[0].ChainCode).subscribe(
     r=>this.chainWeb=r);
     })
  }
 
  showCardDetails()
{
  
   this.router.navigate(['/cardDetailsAndSales',this.chainname,this.img]);
}
 
  
  
 
  

}
