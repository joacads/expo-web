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

  public getById(id: string): Observable<Persona>{
    return this._personaApi.findById(id);
  }

  public create(persona: Persona): Observable<Persona>{
    return this._personaApi.create(persona);
  }

  public delete(id: string): Observable<{}>{
    return this._personaApi.deleteById(id);
  }

  public update(id: string, persona: Persona): Observable<Persona>{
    return this._personaApi.replaceById(id, persona);

  }
}
