import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  lat = -32.8970042;
  lng = -68.8555522;
  zoom = 16

  constructor() { }

  ngOnInit() {
  }

}
