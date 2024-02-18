import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent { 
  @Input()
  public url! : string; //! siempre lo tiene que mandar

  @Input()
  public alt : string = '';

  public hasLoaded:boolean = false;

  ngOnInit():void {
    if ( !this.url ) throw new Error ('Method no implemented'); 
  }

  onLoad () {
    console.log('Image Loaded');
    this.hasLoaded = true;
  }

  onLoadStart(){
    console.log('inicia la carga de la imagen');
  }



}
