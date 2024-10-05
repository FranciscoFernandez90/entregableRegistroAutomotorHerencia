import { Vehiculo } from "./claseVehiculo";

export class Camion extends Vehiculo {
    

     public constructor(marca:string,version:string,modelo:number) {
         super(marca,version,modelo);
     }
}