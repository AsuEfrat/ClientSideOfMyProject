import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomerService} from './Services/customer.service';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CustomerBusinessManagerComponent } from './Components/customer-business-manager/customer-business-manager.component';
import { BusinessOwnerComponent } from './Components/business-owner/business-owner.component'
import { BusinessOwnerService } from './Services/business-owner.service';
import { AddSaleComponent } from './Components/add-sale/add-sale.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardDetailsAndSalesComponent } from './Components/card-details-and-sales/card-details-and-sales.component';
import { SalesComponent } from './Components/sales/sales.component';
import { MyCardsListComponent } from './Components/my-cards-list/my-cards-list.component';
import { AllClubCardsComponent } from './Components/all-club-cards/all-club-cards.component';
import { ClubDetailsComponent } from './Components/club-details/club-details.component';
import { AddChainsToDreamCardComponent } from './Components/add-chains-to-dream-card/add-chains-to-dream-card.component';
import { CardOwnerComponent } from './Components/card-owner/card-owner.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { UserPersonalHomePageComponent } from './Components/user-personal-home-page/user-personal-home-page.component';
import { MassagesComponent } from './Components/massages/massages.component';
import { ExpiredComponent } from './Components/expired/expired.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { DatePipe } from '@angular/common';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    WelcomeComponent,
    CustomerBusinessManagerComponent,
    BusinessOwnerComponent,
    AddSaleComponent,
  
    CardDetailsAndSalesComponent,
    SalesComponent,
    MyCardsListComponent,
    AllClubCardsComponent,
    ContactUsComponent,
    ClubDetailsComponent,
    AddChainsToDreamCardComponent,
    CardOwnerComponent,
    AboutUsComponent,
    UserPersonalHomePageComponent,
    MassagesComponent,
    ExpiredComponent,
    ReportsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxScrollTopModule,
    ButtonsModule,
     WavesModule,
      CollapseModule,
      NgxScrollTopModule,
      NgxLoadingModule.forRoot({})

  
  ],
  providers: [CustomerService,BusinessOwnerService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
