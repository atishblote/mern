import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

//library import
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CRUDModule { }
