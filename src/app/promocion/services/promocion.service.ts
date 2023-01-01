import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Promocion } from 'src/app/promocion/interfaces/promocion.interface';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  promocionSeleccionada!: Promocion;

  constructor(private http: HttpClient) { }

  getPromociones(): Observable<Promocion> {
    return this.http.get<Promocion>("http://localhost:8081/evento/web-service/api/promociones/get-promociones");
  }
}
