import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardType } from '../Models/cardType';
import { ClubCards } from '../Models/ClubCards';
import { StoresForCards } from '../Models/StoresForCards';
import { validationMassages } from '../Models/ValidationMassages';
import { Chain } from '@angular/compiler';
import { Chains } from '../Models/chains';

@Injectable({
  providedIn: 'root'
})
export class ClubCardsService {

 private clubcardlist:ClubCards[];
i:number;
 public get ClubCardsList(): ClubCards[] 
  {return this.clubcardlist;}
  public set ClubCardsList(value: ClubCards[]) 
  {this.clubcardlist = value;}

 private validationMassages:string[];

 public get ValidationMessages():string[]
 {return this.validationMassages}
 public set ValidationMessages(value:string[]) 
{this.validationMassages=value;}


url='https://localhost:44380/api/clubcards/'
  constructor(private http:HttpClient) { 
    
  }

  getAllClubCards(CustomerDetailsCode:number):Observable<ClubCards[]>
  {
    return this.http.get<ClubCards[]>(`${this.url}GetClubCardsList/${CustomerDetailsCode}`)
  }
  getClubTypes():Observable<cardType[]>//מקבל את כל המועדונים שרשומים לאתר
  {
    return this.http.get<cardType[]>(`${this.url}GetClubTypes`);
  }
  

  findChainNamebyCardTypeCode(clubcardsTcode:number[]):Observable<string[]>
  {
  //  this.i=0;
  //  const formdata=new FormData();
  //  for(var item of clubcardsTcode)
  //  {
  //   formdata.append(this.i.toString(),JSON.stringify(item));
  //   this.i++;
  //  }
     return this.http.post<string[]>(this.url+"GetClubCardsNames",clubcardsTcode);
  }

  getSpesificCardTypes(cardNames:string[]):Observable<cardType[]>
  {
    return this.http.post<cardType[]>(this.url+"getSpesificCardType",cardNames)
  }
  getClubCardByChainName(chainname:string,CDCode:number):Observable<ClubCards>
  {
    return this.http.get<ClubCards>(`${this.url}getClubCardByChainName/${chainname}/${CDCode}`)
  }
  getAddedChainsCodes(addedcards:cardType[]):Observable<number[]>//הוספת חנויות הקיימות באתר לDREAMCARD משותף
  {
   
   return this.http.post<number[]>(this.url+"getAddedChainsCodes",addedcards);
  }

  addStoresForTheDreamCard(storesforDreamCards:StoresForCards[]):Observable<void>//יוצר רשימת כרטיסים לחנויות עם אותו קוד סוג כרטיס
  {
  return this.http.post<void>(this.url+"addStoresToDreamCard",storesforDreamCards);
  }

  addClubCardsByCustomer(clubcards:ClubCards[]):Observable<void>
  {
   return this.http.post<void>(this.url+"addClubCardByCustomer",clubcards);
  }

  checkValidity(cusomerDetailsCode:number):Observable<string[]>
  {
   return this.http.get<string[]>(`${this.url}checkValidaty/${cusomerDetailsCode}`);
  }

  GetChainByChainName(typeName:string):Observable<Chains>
  {
    return this.http.get<Chains>(`${this.url}GetChainByChainName/${typeName}`);
  }

  GetValidatyByCTypeCode(CardTypeCode:number):Observable<number>
  {
    return this.http.get<number>(`${this.url}GetValidatyByCTypeCode/${CardTypeCode}`);
  }

  GetAllStores(typeName:string):Observable<string[]>
  {
    return this.http.get<string[]>(`${this.url}GetAllStores/${typeName}`);
  }
}
