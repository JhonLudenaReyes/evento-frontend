import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion/services/promocion.service';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-registro',
  templateUrl: './evento-registro.component.html',
  styleUrls: ['./evento-registro.component.css']
})
export class EventoRegistroComponent implements OnInit {

  evento = {
    "idEvento": 0,
    "idPromocion": 0,
    "idUsuario": 1,
    "usuarioCreacion": "jludena",
    "fechaCreacion": new Date(),
    "evento": "",
    "fechaEvento": new Date(),
    "cantidadEntradas": 0,
    "precio": 0,
    promocion: {
      "promocion": "" 
    }
  }

  constructor(private eventoService: EventoService , private promocionService: PromocionService, private router: Router) { }

  ngOnInit(): void {
    if(this.eventoService.eventoSeleccionado != undefined){
      this.evento = this.eventoService.eventoSeleccionado;
      console.log(this.evento);
    //this.evento.promocion.promocion = this.promocionService.promocionSeleccionada.promocion;
    }

    //console.log(this.promocionService.promocionSeleccionada.promocion);
    // if(this.promocionService.promocionSeleccionada.promocion != undefined){
      
    //   this.evento.promocion.promocion = this.promocionService.promocionSeleccionada.promocion;
    // }
    
  }

  onSubmit(){

    if(this.evento.idEvento == 0){
      this.evento.idPromocion = this.promocionService.promocionSeleccionada.idPromocion;
      this.eventoService.saveEvento(this.evento).subscribe(response => console.log(response));
    }else{
      this.evento.idPromocion = this.promocionService.promocionSeleccionada.idPromocion;
      this.eventoService.updateEvento(this.evento).subscribe(response => console.log(response));
    }    
    
  }

  volverListadoEvento(){
    this.navigate();
  }

  navigate(){
    this.router.navigate([''])
  }

}
