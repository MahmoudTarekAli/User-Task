import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatGridListModule, MatTableModule} from '@angular/material'  ;
import {MaterialModule} from './shared/material.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateInvoiceComponent} from './modules/invoices/components/update-invoice/update-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateInvoiceComponent],

})
export class AppModule {
}
