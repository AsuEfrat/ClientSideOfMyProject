import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Shopping } from 'src/app/Models/shopping';
import { getLocaleMonthNames, DatePipe } from '@angular/common';
import { BusinessOwnerService } from 'src/app/Services/business-owner.service';
import { SalesService } from 'src/app/Services/sales.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ExcelServicesService } from 'src/app/Services/excel-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  title = 'excel-shoping-report'; 
 CustomerShopping:Shopping[]=[];
 thisMonth:string;
 thisYear:number;
 monthNames:string[] = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי","יוני","יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר","דצמבר"];
 who:string;
 cardtypeCode:number;
 reports:Shopping[]=[];
 subscription:Subscription;
 
 data:any;
 
 constructor(private excelService:ExcelServicesService,private http: HttpClient,private route:ActivatedRoute, private saleService:SalesService, private businessOwner:BusinessOwnerService, private customerService:CustomerService) 
 { 
  // this.getJSON().subscribe(data => {  
  //   data.forEach(row => {  
  //     this.excel.push(row);  
  //   });  
  //  }); 



 }

  ngOnInit() {
    
this.thisMonth=this.monthNames[(new Date().getMonth()-1).toString()];
this.thisYear=new Date().getFullYear(); 
this.subscription=this.route.params.subscribe((params)=>
 {
  
    this.who=params['who'];
 if(this.who=="true")  
{
 this.customerService.getMonthlyReport(this.customerService.ThisCustomer.CDCode).subscribe(
     r=>
     this.CustomerShopping=r);

}
else
{
  this.businessOwner.GetOwnerReport(this.saleService.customer.CardTypeCode).subscribe(
    r=>{debugger
    this.reports=r});
}
  } )

   }

   excel=[];  

   exportAsXLSX():void {
  if(this.who=="true")
    this.excelService.exportAsExcelFile(this.CustomerShopping,'Shoping-Report');
  else
     this.excelService.exportAsExcelFile2(this.reports,'Shoping-Report');
  }


 public getJSON(): Observable<any> {  
   return this.http.get('https://api.myjson.com/bins/zg8of');  
 }  

 exportAsXLSXAll()
 {
   if(this.who=="true")
   {
   this.customerService.GetAllCustomerShopping(this.customerService.ThisCustomer.CDCode).subscribe(
     r=> this.excelService.exportAsExcelFile(r,'Shoping-Report')
   );
   }
   else
   {
     this.customerService.GetAllChainShopping(this.saleService.customer.CardTypeCode).subscribe(
       res=>this.excelService.exportAsExcelFile2(res,'Shoping-Report')
     );
   }
 }

}
