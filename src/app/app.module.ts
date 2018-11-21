import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AgmCoreModule } from '@agm/core';
import { SDKBrowserModule } from './shared/sdk';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//BOOTSTRAP MODULES
import { ModalModule } from 'ngx-bootstrap';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTEixGaXHchqgLtX_4VgnPNhI7eyY5vZA'
    }),
    //BOOTSTRAP
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
