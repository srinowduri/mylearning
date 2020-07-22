import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Family1Component } from './family1/family1.component';
import { Family1DetailsComponent } from './family1/family1-details/family1-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Family1Component,
    Family1DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
