import { Component, OnInit, TemplateRef } from '@angular/core';
import { PersonaService } from 'src/app/shared/services/persona.service';
import { Persona, Direccion } from 'src/app/shared/sdk';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public lat = -32.8975489;
  public lng = -68.8487298;
  public zoom = 13;
  public personas: Persona[];
  public direcciones: Direccion[];

  public formulario: FormGroup;

  private modalRef: BsModalRef;

  constructor(
    public _personaService: PersonaService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this._personaService.get().subscribe(personas =>{
      this.personas = personas;
    })
    
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      edad: new FormControl(''),
      _direcciones: new FormArray([])
    })
  }

  get direccionesForm(){
    return this.formulario.get('_direcciones') as FormArray
  }

  agregarDireccion(){
    const direccion = new FormGroup({
      calle: new FormControl(),
      numero: new FormControl(),
      latitud: new FormControl(),
      longitud: new FormControl()
    })

    this.direccionesForm.push(direccion);
  }

  eliminarDireccion(idx){
    this.direccionesForm.removeAt(idx);
  }

  guardarPersona(){
    this._personaService.create(this.formulario.value).subscribe(res =>{
      this._personaService.get().subscribe(personas =>{
        this.personas = personas;
        this.formulario.reset();
      })
    });
  }

  abrirMapa(template: TemplateRef<any>, direcciones: Direccion[]) {
    this.direcciones = direcciones;
    this.modalRef = this.modalService.show(template);
  }

  eliminarPersona(id: string){
    this._personaService.delete(id).subscribe(res =>{
      this.updatePersonas();
    })
  }

  updatePersonas(){
    this._personaService.get().subscribe(personas =>{
      this.personas = personas;
    })
  }

}
