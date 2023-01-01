import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListaComponent } from './components/evento-lista/evento-lista.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { EventoRegistroComponent } from './components/evento-registro/evento-registro.component';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromocionModule } from '../promocion/promocion.module';

@NgModule({
  declarations: [
    EventoListaComponent,
    EventoRegistroComponent
  ],
  exports: [
    EventoListaComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    PromocionModule
  ]
})
export class EventoModule { }
