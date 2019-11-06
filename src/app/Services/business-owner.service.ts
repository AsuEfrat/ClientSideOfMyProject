import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessOwner } from '../Models/businessOwner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessOwnerService {


  url='https://localhost:44380/api/businessOwner'
  constructor(private http:HttpClient) { }

   addBusinessOwner(businessOwner:BusinessOwner)
  {
   debugger
   this.http.post<number>(this.url+"addbusinessOwner",businessOwner);
  }
}
