import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/Services/sales.service';
import { Sale } from 'src/app/Models/Sale';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {
  sale:Sale=new Sale();
  constructor(private salesService:SalesService,private cusService:CustomerService) { }

  ngOnInit() {

  }

  register(imageInput)
  {
    debugger
    
    this.salesService.uploadSaleWithImage(imageInput.files[0] ,this.sale).subscribe();
     
  }
  

}

