import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ProductsModule } from './products/products.module';
import { AdminComponent } from './shared/admin.component';
import { HomeComponent } from './shared/home.component';
import { ErrorComponent } from './shared/error.component';
import { ContactComponent } from './shared/contact.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    AdminComponent,
    HomeComponent,
    ErrorComponent,
    ContactComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
