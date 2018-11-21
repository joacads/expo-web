import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/shared/services/persona.service';
import { Persona } from 'src/app/shared/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public lat = -32.8970042;
  public lng = -68.8555522;
  public zoom = 16;
  public personas: Persona[];

  constructor(
    public _personaService: PersonaService
  ) {}

  ngOnInit() {
    this._personaService.get().subscribe(personas =>{
      this.personas = personas;
    })
  }

}
