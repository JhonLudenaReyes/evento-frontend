import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionesComponent } from './components/promociones/promociones.component';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    PromocionesComponent
  ],
  exports: [
    PromocionesComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class PromocionModule { }
