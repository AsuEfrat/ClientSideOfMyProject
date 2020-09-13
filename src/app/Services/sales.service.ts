import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusinessOwner } from '../Models/businessOwner';
import { Sale } from '../Models/Sale';
import { ChainNameAndSales } from '../Models/ChainNameAndSales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
 private clubSales:Sale[];
  private cCustomer:any;
 private specialSales:ChainNameAndSales[]; 

public get ClubSale():Sale[]
{return this.clubSales;}
public set ClubSale(value:Sale[])
{this.clubSales=value;}

  public get customer():any
  {return this.cCustomer;}
  public set customer(value:any) 
  {this.cCustomer = value;}

  public get SpecialSales():ChainNameAndSales[]
  {return this.specialSales;}
  public set SpecialSales(value:ChainNameAndSales[])
  {this.specialSales=value;}

  url='https://localhost:44380/api/sales/'
  constructor(private http:HttpClient) { }

  
  public uploadSaleWithImage(image: File,sale:Sale): Observable<Object>
  {
     const formData = new FormData();

    
     formData.append('data', JSON.stringify(sale));
     formData.append('image', image);
     formData.append('cardtypecode',this.cCustomer.CardTypeCode);
     return this.http.post(this.url+"addSale",formData);
  }

  public GetSaleByUserCodeAndChainCode(chainC:number):Observable<Sale>
  {
     return this.http.get<Sale>(`${this.url}getSale/${chainC}`);

  }

  GetSalesByCardTypeCode(cardtypecode:number,customerDetailsCode:number):Observable<Sale[]>
  {
    return this.http.get<Sale[]>(`${this.url}getSale/${cardtypecode}/${customerDetailsCode}`)
  }
  GetChainWeb(chainCode:number):Observable<string>
  {
    return this.http.get<string>(`${this.url}getChainWeb/${chainCode}`);
  }

  GetSpecialSalesByCustomerDetailsCode(customerDetailsCode:number):Observable<ChainNameAndSales[]>
  {
    return this.http.get<ChainNameAndSales[]>(`${this.url}getAllSpecialSalesForCustomer/${customerDetailsCode}`);
  }
  

  
}


