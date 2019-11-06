import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { BusinessOwnerComponent } from './Components/business-owner/business-owner.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CustomerBusinessManagerComponent } from './Components/customer-business-manager/customer-business-manager.component';


const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'customerbusinessmanager',component:CustomerBusinessManagerComponent},
  { path:'addcustomer',component:AddCustomerComponent},
  {path:'businessOwner',component: BusinessOwnerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
