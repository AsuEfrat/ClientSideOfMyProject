import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomerService} from './Services/customer.service';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ClubCardsComponent } from './Components/club-cards/club-cards.component';
import { CustomerBusinessManagerComponent } from './Components/customer-business-manager/customer-business-manager.component';
import { BusinessOwnerComponent } from './Components/business-owner/business-owner.component'
import { BusinessOwnerService } from './Services/business-owner.service';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    WelcomeComponent,
    ClubCardsComponent,
    CustomerBusinessManagerComponent,
    BusinessOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [CustomerService,BusinessOwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
