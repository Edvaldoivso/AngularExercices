import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//HTTP Imports
import { HttpClientModule } from '@angular/common/http';
import { ListCityComponent } from './Components/list-city/list-city.component';
import { HomeComponent } from './Pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
