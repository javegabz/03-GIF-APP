
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})


export class GifsCardComponent  {
    @Input()
    public gif!: Gif; //para este caso se usa el @Input, para inyectar información de un componente padre a un componente hijo, el ! es para indicar que siempre va a llegar esta información sin necesidad de inicializarlo

    ngOnInit(): void {
     if ( !this.gif ) throw new Error ('Gif property is required'); 
    }

}
