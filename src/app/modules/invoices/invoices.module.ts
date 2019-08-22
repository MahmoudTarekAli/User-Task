import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  _MatMenuDirectivesModule,
  MatButtonModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {InvoiceRoutingModule} from './invoice.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {InvoicesComponent} from './invoices.component';


@NgModule({
  declarations: [LoginComponent, InvoicesComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    _MatMenuDirectivesModule,
    MatIconModule,
    MatMenuModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule
  ],
})
export class InvoicesModule {
}
