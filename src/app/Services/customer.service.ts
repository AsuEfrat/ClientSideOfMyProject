import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../Models/customerDetails';
import { Welcome } from '../Models/welcome';
import { HttpHeaders } from '@angular/common/http';
import { BusinessOwner } from '../Models/businessOwner';
import { Shopping } from '../Models/shopping';




@Injectable({
  providedIn: 'root'
})
 export class CustomerService {
  private _currentCustomer: number;//ישמור את קוד הלקוח שהתווסף עכשיו
  private thisCustomer:any;//ישמור את פרטי הלקוח העכשווי

  public get currentCustomer(): number 
  {return this._currentCustomer;}
  public set currentCustomer(value: number) 
  {this._currentCustomer = value;}

  public get ThisCustomer():any
  {return this.thisCustomer;}
  public set ThisCustomer(value:any)
  {this.thisCustomer=value;}

  url='https://localhost:44380/api/customer/'
  constructor(private http:HttpClient) { }

  addCustomer(customer:Customer):Observable<number>
  {
    return this.http.post<number>(this.url+"addcustomer",customer);
  }
  addCustomerDetails(customerD:CustomerDetails):Observable<void>
  {
   
    return this.http.post<void>(this.url+"addCustomerDetails",customerD);
  }
  
  getCustomerByNameAndPasswordReturnCusOrMan(welcome:Welcome):Observable<any>
  {
    
    return this.http.get<any>(`${this.url}getcustomerByNPAndReturnCustomerOrManeger/${welcome.UserName}/${welcome.Password}`);
  }
 
  getMonthlyReport(CustomerDetailsCode:number):Observable<Shopping[]>
  {
    return this.http.get<Shopping[]>(`${this.url}getShopppingReport/${CustomerDetailsCode}`);
  }

  GetAllCustomerShopping(customerD:number):Observable<Shopping[]>
  {
    return this.http.get<Shopping[]>(`${this.url}GetAllCustomerShopping/${customerD}`);
  }

  GetAllChainShopping(cardTypeCode:number):Observable<Shopping[]>
  {
    return this.http.get<Shopping[]>(`${this.url}GetAllChainShopping/${cardTypeCode}`);
  }
  
}
