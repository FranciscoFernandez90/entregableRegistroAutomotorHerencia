import { Vehiculo } from "./claseVehiculo";

export class Moto extends Vehiculo {
    

     public constructor(marca:string,version:string,modelo:number) {
         super(marca,version,modelo);
     }
}