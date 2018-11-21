import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AgmCoreModule } from '@agm/core';
import { SDKBrowserModule } from './shared/sdk';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTEixGaXHchqgLtX_4VgnPNhI7eyY5vZA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
