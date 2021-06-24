import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {


    //Array Original
    private _personajes: Personaje[] = [
        {
        nombre:'Goku',
        poder: 15000
        },
        {
        nombre:'Vegeta',
        poder: 7000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];  //romper referencia  
    }

    constructor(){}

    agregarPersonaje( personaje:Personaje ){
        this._personajes.push( personaje );
    }

}
