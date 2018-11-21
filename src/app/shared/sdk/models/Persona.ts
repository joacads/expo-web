/* tslint:disable */
import {
  Direccion
} from '../index';

declare var Object: any;
export interface PersonaInterface {
  "nombre"?: string;
  "edad"?: number;
  "fechaCreacion"?: Date;
  "fechaBaja"?: Date;
  "id"?: any;
  "_direcciones"?: Array<any>;
  direcciones?: Direccion[];
}

export class Persona implements PersonaInterface {
  "nombre": string;
  "edad": number;
  "fechaCreacion": Date;
  "fechaBaja": Date;
  "id": any;
  "_direcciones": Array<any>;
  direcciones: Direccion[];
  constructor(data?: PersonaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Persona`.
   */
  public static getModelName() {
    return "Persona";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Persona for dynamic purposes.
  **/
  public static factory(data: PersonaInterface): Persona{
    return new Persona(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Persona',
      plural: 'personas',
      path: 'personas',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "edad": {
          name: 'edad',
          type: 'number'
        },
        "fechaCreacion": {
          name: 'fechaCreacion',
          type: 'Date'
        },
        "fechaBaja": {
          name: 'fechaBaja',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "_direcciones": {
          name: '_direcciones',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
      },
      relations: {
        direcciones: {
          name: 'direcciones',
          type: 'Direccion[]',
          model: 'Direccion',
          relationType: 'embedsMany',
                  keyFrom: '_direcciones',
          keyTo: 'id'
        },
      }
    }
  }
}
