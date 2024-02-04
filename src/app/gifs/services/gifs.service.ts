import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // significa que el servicio va a estar disponioble en toda la aplicación y todos los modulos q  ue inyecten
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag (tag: string): void {
    this._tagsHistory.unshift( tag );
  }

}
