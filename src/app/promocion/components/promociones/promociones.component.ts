import { Component, OnInit } from '@angular/core';
import { Promocion } from '../../interfaces/promocion.interface';
import { PromocionService } from '../../services/promocion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  promociones: Promocion[]=[];

  constructor(private promocionService: PromocionService, private router: Router) { }

  ngOnInit(): void {
    this.getPromociones();
  }

  getPromociones(){
    this.promocionService.getPromociones().subscribe(response => this.promociones.push(response));
    console.log(this.promociones);
    
  }

  selectedRow(promocion: any){
    this.promocionService.promocionSeleccionada = promocion;
    this.navigate();
  }

  navigate(){
    this.router.navigate(['/registro-evento'])
  }

}
