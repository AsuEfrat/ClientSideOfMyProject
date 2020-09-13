import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { SalesService } from 'src/app/Services/sales.service';
import { BusinessOwnerService } from 'src/app/Services/business-owner.service';
import { Shopping } from 'src/app/Models/shopping';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-owner',
  templateUrl: './card-owner.component.html',
  styleUrls: ['./card-owner.component.css']
})
export class CardOwnerComponent implements OnInit {
CardTypeCode:number;
reports:Shopping[];
  constructor(private router:Router,private saleService:SalesService,private businessOwner:BusinessOwnerService) { }

  ngOnInit() {
    this.CardTypeCode=this.saleService.customer.CardTypeCode;
  }


  report()//שולח את קוד סוג כרטיס של מנהל זה
  {
    this.router.navigate(['/reports',false]);

  }
}
