import { Component, OnInit } from '@angular/core';
import { Evento } from '../../interfaces/evento.interface';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.css'],
})
export class EventoListaComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService, private router: Router) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');

    this.getEventos();
  }

  getEventos() {
    this.eventoService
      .getEventos()
      .subscribe((response) => this.eventos.push(response));
    console.log(this.eventos);
  }

  seleccionarevento(evento: Evento) {
    this.eventoService.eventoSeleccionado = evento;
    this.navigate();
  }

  navigate() {
    this.router.navigate(['/registro-evento']);
  }

  eventoaeliminar(evento: Evento) {
    console.log(this.eventos);
    this.eventoService
      .deleteEvento(evento)
      .subscribe((response) => console.log(response));
    console.log(this.eventos);
  }
}
