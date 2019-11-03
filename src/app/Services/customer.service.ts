import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../Models/customerDetails';



@Injectable({
  providedIn: 'root'
})
 export class CustomerService {
  private _currentCustomer: number;
  public get currentCustomer(): number {
    return this._currentCustomer;
  }
  public set currentCustomer(value: number) {
    this._currentCustomer = value;
  }
  url='https://localhost:44380/api/customer/'
  constructor(private http:HttpClient) { }

  addCustomer(customer:Customer):Observable<number>
  {
   debugger
    return this.http.post<number>(this.url+"addcustomer",customer);
  }
  addCustomerDetails(customerD:CustomerDetails)
  {
    debugger
    this.http.post<number>(this.url+"addCustomerDetails",customerD);
  }
}
