import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from "./admin-routing.module";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    ViewTicketComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule,
    ToastModule
  ]
})
export class AdminModule { }
