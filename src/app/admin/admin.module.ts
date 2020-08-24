import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from "./admin-routing.module";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { AccountsComponent } from './master/accounts/accounts.component';
import { ProductsComponent } from './master/products/products.component';
import { ClassificationsComponent } from './master/classifications/classifications.component';
import { PrioritiesComponent } from './master/priorities/priorities.component';
import { StatusComponent } from './master/status/status.component';
import { CompaniesComponent } from './master/companies/companies.component';
import { RolesComponent } from './master/roles/roles.component';

// const routes: Routes = [
//   { path: 'view-ticket', component: ViewTicketComponent },
//   { path: 'master/accounts', component: AccountsComponent },
//   { path: 'master/products', component: ProductsComponent },
//   { path: 'master/classifications', component: ClassificationsComponent },
//   { path: 'master/priorities', component: PrioritiesComponent },
//   { path: 'master/companies', component: CompaniesComponent },
//   { path: 'master/status', component: StatusComponent },
//   { path: 'master/roles', component: RolesComponent },
  
// ]

@NgModule({
  declarations: [
    ViewTicketComponent, AccountsComponent, ProductsComponent,
    ClassificationsComponent, PrioritiesComponent, StatusComponent, CompaniesComponent, RolesComponent, 
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
