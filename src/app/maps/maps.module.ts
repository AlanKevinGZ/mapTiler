import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropetiPageComponent } from './pages/propeti-page/propeti-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';



@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropetiPageComponent,
    ZoomPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
  ]
})
export class MapsModule { }
