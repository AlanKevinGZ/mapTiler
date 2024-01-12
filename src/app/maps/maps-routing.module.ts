import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropetiPageComponent } from './pages/propeti-page/propeti-page.component';

const routes: Routes = [
  {
    path:'',
    component:MapLayoutComponent,
    children:[
      {path:'fullscreen', component:FullScreenPageComponent},
      {path:'zoom-range', component:ZoomPageComponent},
      {path:'markers', component:MarkersPageComponent},
      {path:'propieties', component:PropetiPageComponent},
      {path:'**', redirectTo:'fullscreen'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
