import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements  AfterViewInit {


  
  @ViewChild('map') divMap?:ElementRef ;
  public map?:Map
  public zoom:number=14;
public disabledZoom:boolean=false;
public initialState:any= { lng: -99.12766, lat: 19.42847 };

public markerts:any[]=[];

  
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

    this.readToLocalStorage()
    /* const marker =new Marker({color: "#FF0000"})
      .setLngLat(this.initialState)
      .addTo(this.map);
    */
  }

  createMartet(){

    if (!this.map) {
      return;
    }

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLant=this.map.getCenter();
    this.addMarket(lngLant,color)
  }

  addMarket(lngLat:any,color:string="#FF0000"){
    if(!this.map) return;

    const marker =new Marker({color:color, draggable:true})
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markerts.push({marker:marker,color:marker._color})
  
    marker.on('dragend',()=>{
      this.saveToLocalStorage()
    })
    
    

  }

  deleteMrkert(i: number){
    this.markerts[i].marker.remove();
    this.markerts.splice(i,1);
   this.saveToLocalStorage()
  }

  flyTo(marker:Marker){
    console.log(marker);
    
    this.map?.flyTo({
      zoom:14,
      center:marker.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMartker=this.markerts.map(({color,marker})=>{
      return{
        color:color,
        lngLant:marker.getLngLat().toArray()
      }
    })
   localStorage.setItem('plain',JSON.stringify(plainMartker))
    
  }

  readToLocalStorage(){
    let plainJson=JSON.parse(localStorage.getItem('plain')|| '[]');
    console.log(plainJson);
    
    plainJson.forEach(ele => {
     
      this.addMarket(ele.lngLant,ele.color)
      console.log(ele.lngLant);
      
    });
  }



}
