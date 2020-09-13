import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { BusinessOwnerComponent } from './Components/business-owner/business-owner.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CustomerBusinessManagerComponent } from './Components/customer-business-manager/customer-business-manager.component';
import { AddSaleComponent } from './Components/add-sale/add-sale.component';

import { Welcome } from './Models/welcome';
import { SalesComponent } from './Components/sales/sales.component';
import { CardDetailsAndSalesComponent } from './Components/card-details-and-sales/card-details-and-sales.component';
import { MyCardsListComponent } from './Components/my-cards-list/my-cards-list.component';
import { ClubDetailsComponent } from './Components/club-details/club-details.component';
import { AddChainsToDreamCardComponent } from './Components/add-chains-to-dream-card/add-chains-to-dream-card.component';
import { AllClubCardsComponent } from './Components/all-club-cards/all-club-cards.component';
import { CardOwnerComponent } from './Components/card-owner/card-owner.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { UserPersonalHomePageComponent } from './Components/user-personal-home-page/user-personal-home-page.component';
import { MassagesComponent } from './Components/massages/massages.component';
import { ExpiredComponent } from './Components/expired/expired.component';
import { ReportsComponent } from './Components/reports/reports.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'customerbusinessmanager',component:CustomerBusinessManagerComponent},
  {path:'addcustomer',component:AddCustomerComponent},
  {path:'businessOwner',component: BusinessOwnerComponent},
  {path:'addsale',component:AddSaleComponent},
  
  {path:'addsale/:sale',component:AddSaleComponent},
  {path:'sales/:chainname/:img',component:SalesComponent},
  {path:'sales/:ChainCode/:CustomerCode',component:SalesComponent},
  {path:'cardDetailsAndSales/:p1/:img',component:CardDetailsAndSalesComponent},
  {path:'myCardsList',component:MyCardsListComponent},
  {path:'clubDetails/:clubcard',component:ClubDetailsComponent},
  {path:'addChainsToDreamCards/:cardtypecode',component:AddChainsToDreamCardComponent},
  {path:'allclubcards',component: AllClubCardsComponent},
  {path:'cardOwner',component:CardOwnerComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'userPersonalHomePage',component:UserPersonalHomePageComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'massages',component:MassagesComponent},
  {path:'expired',component:ExpiredComponent},
  {path:'reports/:who',component:ReportsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
