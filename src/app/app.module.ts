import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventoModule } from './evento/evento.module';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { PromocionModule } from './promocion/promocion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventoModule,
    HttpClientModule,
    AppRoutingModule,
    EventoModule,
    FormsModule,
    CalendarModule,
    PromocionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
