import { Component } from '@angular/core';

interface MenuItem{
  router:String,
  name:String
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public meniItem:MenuItem[]=[
    {router:'/maps/fullscreen', name:"Full Scream"},
    {router:'/maps/zoom-range', name:"zoom-range"},
    {router:'/maps/markers', name:"markers"},
  ]

}
