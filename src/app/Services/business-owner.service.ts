import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessOwner } from '../Models/businessOwner';
import { Observable } from 'rxjs';
import { Chains } from '../Models/chains';
import { cardType } from '../Models/cardType';
import { StoresForCards } from '../Models/StoresForCards';
import { Shopping } from '../Models/shopping';


@Injectable({
  providedIn: 'root'
})
export class BusinessOwnerService {


  url='https://localhost:44380/api/businessOwner/'
  constructor(private http:HttpClient) { }

   addBusinessOwner(businessOwner:BusinessOwner):Observable<number>
  {
   
   return this.http.post<number>(this.url+"addbusinessOwner",businessOwner);
  }

  addChain(chain:Chains):Observable<number>
  {
   
   return this.http.post<number>(this.url+"addChain",chain); 
  }

  addCardType(cardtype:cardType,logo:File):Observable<number>
  {
    const formdata=new FormData();
    formdata.append('cardtype',JSON.stringify(cardtype));
    formdata.append('logo',logo);
    return this.http.post<number>(this.url+"addCardType",formdata);
  }

  addStoresForCards(storesforcards:StoresForCards):Observable<void>
  {
   
    return this.http.post<void>(this.url+"addStoresForCards",storesforcards);
  }

  GetOwnerReport(cardTypeCode:number):Observable<Shopping[]>
  {
    return this.http.get<Shopping[]>(`${this.url}GetOwnerReport/${cardTypeCode}`);
  }
}
