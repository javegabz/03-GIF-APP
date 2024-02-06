import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gif.interfaces'



@Injectable({
  providedIn: 'root' // significa que el servicio va a estar disponioble en toda la aplicación y todos los modulos q  ue inyecten
})
export class GifsService {
  
  private  GIPHY_API_KEY: string = 'lkLvLgiglrQVEUDkFi9veufOBbYg7qsr';
  private  serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];

  constructor( private http : HttpClient) { 
    this.loadLocalStorage ();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory (tag: string) : void {
    tag = tag.toLowerCase(); //convierte todos los caracteres a lowercase, el objetivo es para comparar despues

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter ((oldTag) => oldTag !== tag ) 
    }
    this._tagsHistory.unshift( tag ); //inserta el elemento al inicio de la lista
    this._tagsHistory = this.tagsHistory.splice(0,10); // no deja que el listado cresca a mas de 10 elementos
    this.saveLocalStorage ();
  }

/*
  async searchTag (tag: string):Promise<void> {
    if (tag.length === 0 ) return;
    this.organizeHistory(tag);
    fetch('https://api.giphy.com/v1/gifs/search?api_key=lkLvLgiglrQVEUDkFi9veufOBbYg7qsr&q=street figther&limit=10')
    .then (resp => resp.json())
    .then (data => console.log (data))
    .catch (error => console.error(error)); 
  }
  */

  private saveLocalStorage (): void {
    localStorage.setItem('history', JSON.stringify (this._tagsHistory));
  }

  private loadLocalStorage (): void {
    if (!localStorage.getItem('history')) return; //si no tenemos nada cargado en el local storage, no haga nada
    this._tagsHistory= JSON.parse(localStorage.getItem('history')!); //La admiración indica que hay una data.
    this.searchTag (this._tagsHistory[0]);
  }

  searchTag (tag: string):void {
    if (tag.length === 0 ) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit','10')
      .set('q',tag);

    let stringUrl=`${this.serviceUrl}/search` ;
    this.http.get <SearchResponse>(stringUrl, {params})
      .subscribe( (resp ) => {
        this.gifList = resp.data;
        //console.log (resp.data);
      })
  }

}
