import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements  AfterViewInit {
  map: Map | undefined;

  @ViewChild('map') divMap?:ElementRef 
  //@ViewChildes un decorador en Angular que se utiliza para obtener una referencia a un componente secundario, directiva o elemento HTML 

  constructor(){}

  ngAfterViewInit(): void {
    if (!this.divMap) {
      return;
    }
    const initialState = { lng: -99.12766, lat: 19.42847, zoom: 14 };

    this.map = new Map({
      container: this.divMap.nativeElement, //acceso directo al elemento DOM nativo subyacente. 
      style: `https://api.maptiler.com/maps/streets/style.json?key=X9HJZqBKDhu199zUlVGd`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }
 

}
