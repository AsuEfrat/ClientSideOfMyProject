import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomerService} from './Services/customer.service';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ClubCardsComponent } from './Components/club-cards/club-cards.component'


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    WelcomeComponent,
    ClubCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
