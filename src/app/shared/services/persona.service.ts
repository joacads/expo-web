import { Injectable } from '@angular/core';
import { PersonaApi, Persona } from '../sdk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private _personaApi: PersonaApi
  ) { }

  public get(): Observable<Persona[]>{
    return this._personaApi.find();
  }
}
