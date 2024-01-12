import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-zoom-page',
  templateUrl: './zoom-page.component.html',
  styleUrls: ['./zoom-page.component.css']
})
export class ZoomPageComponent implements  AfterViewInit, OnDestroy{
  

  @ViewChild('map') divMap?:ElementRef ;
  public map?:Map
  public zoom:number=14;
public disabledZoom:boolean=false;
public initialState:any= { lng: -99.12766, lat: 19.42847 };

  
  ngAfterViewInit(): void {
    if (!this.divMap) {
      return;
    }
   this.map = new Map({
      container: this.divMap.nativeElement, //acceso directo al elemento DOM nativo subyacente. 
      style: `https://api.maptiler.com/maps/streets/style.json?key=X9HJZqBKDhu199zUlVGd`,
      center: [this.initialState.lng, this.initialState.lat],
      zoom:this.zoom
    });

    this.mapListener();
  }

  mapListener(){
    this.map?.on('zoom',(ev)=>{
      this.zoom=this.map!.getZoom()
      
    });
    
    this.map?.on('zoomend',(ev)=>{
      if (this.map!.getZoom()<18) {
        this.disabledZoom=false;  
       return;
      }
      this.map!.zoomTo(17);
      this.disabledZoom=true;
    });


    this.map?.on('move',()=>{
      this.initialState.lng=this.map?.getCenter().lng;
      this.initialState.lat=this.map?.getCenter().lat;

    })
  }

  zoomAdd(){
    this.map?.zoomIn()
  }

  
  zoomOut(){
    this.map?.zoomOut()
  }


  zoomChange(value:string){
    this.zoom=Number(value);
    this.map?.zoomTo(this.zoom)
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }

}
