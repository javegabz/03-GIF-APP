import { Component,  Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gif-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent { 
  constructor() { }

  @Input()
  public gifs: Gif[] = [];
}
