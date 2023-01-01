import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Evento } from '../interfaces/evento.interface';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventoSeleccionado!: Evento;

  constructor(private http: HttpClient) { 
    console.log("Servicio http");
    
   }

   getEventos(): Observable<Evento> {
    return this.http.get<Evento>("http://localhost:8081/evento/web-service/api/eventos/events");
   }

   saveEvento(evento: any): Observable<Evento> {
    return this.http.post<Evento>("http://localhost:8081/evento/web-service/api/eventos/save", evento);
   }

    updateEvento(evento: any): Observable<Evento> {
     return this.http.put<Evento>("http://localhost:8081/evento/web-service/api/eventos/update", evento);
    }
}
