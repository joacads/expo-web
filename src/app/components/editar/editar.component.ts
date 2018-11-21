import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/shared/services/persona.service';
import { Persona } from 'src/app/shared/sdk';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {

  public formulario:  FormGroup;
  
  private id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.id = params.id;
      this._personaService.getById(params.id).subscribe(persona =>{
        this.formulario.patchValue(persona);

        persona._direcciones.forEach(direccion =>{
          let direccionForm = new FormGroup({
            calle: new FormControl(direccion.calle),
            numero: new FormControl(direccion.numero),
            latitud: new FormControl(direccion.latitud),
            longitud: new FormControl(direccion.longitud)
          })
          
          this.direccionesForm.push(direccionForm)
        })
      })
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
    this._personaService.update(this.id, this.formulario.value).subscribe(res =>{
      this.router.navigate(['/']);
    })
  }

}
