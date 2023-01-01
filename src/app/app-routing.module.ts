import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoListaComponent } from './evento/components/evento-lista/evento-lista.component';
import { EventoRegistroComponent } from './evento/components/evento-registro/evento-registro.component';
import { PromocionesComponent } from './promocion/components/promociones/promociones.component';

const routes: Routes = [
  {
    path: '',
    component: EventoListaComponent,
    pathMatch: 'full',
  },
  {
    path: 'registro-evento',
    component: EventoRegistroComponent,
  },
  {
    path: 'obtener-promociones',
    component: PromocionesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
