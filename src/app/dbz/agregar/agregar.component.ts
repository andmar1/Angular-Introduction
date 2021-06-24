import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

 

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // @Input () personajes :Personaje[] = [];
  
  @Input () nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private DbzService: DbzService){}   //Jalar metodos del "servicio"

  //Emite eventos 
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();  //Generico

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;      
    }
    
    this.DbzService.agregarPersonaje( this.nuevo);
    // this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '', 
      poder: 0
    }

  }

}




















//Meter elementos al arreglo
// agregar(){
//   if (this.nuevo.nombre.trim().length === 0) {
//     return;      
//   }
//   console.log( this.nuevo )
//   //Meter a la lista y purgar el arreglo
//   // this.personajes.push( this.nuevo );
//   this.nuevo = {
//     nombre: '', 
//     poder: 0
//   }

// }