/* tslint:disable */

declare var Object: any;
export interface DireccionInterface {
  "id"?: string;
  "calle"?: string;
  "numero"?: string;
  "latitud"?: number;
  "longitud"?: number;
}

export class Direccion implements DireccionInterface {
  "id": string;
  "calle": string;
  "numero": string;
  "latitud": number;
  "longitud": number;
  constructor(data?: DireccionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Direccion`.
   */
  public static getModelName() {
    return "Direccion";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Direccion for dynamic purposes.
  **/
  public static factory(data: DireccionInterface): Direccion{
    return new Direccion(data);
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
      name: 'Direccion',
      plural: 'direcciones',
      path: 'direcciones',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "calle": {
          name: 'calle',
          type: 'string'
        },
        "numero": {
          name: 'numero',
          type: 'string'
        },
        "latitud": {
          name: 'latitud',
          type: 'number'
        },
        "longitud": {
          name: 'longitud',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
