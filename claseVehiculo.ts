export class Vehiculo {
    private tipo:string;
    private marca:string;
    private version:string;
    private modelo:number;

    public constructor(tipo:string,marca:string,version:string,modelo:number) {
        this.marca=marca;
        this.version=version;
        this.modelo=modelo;
        this.tipo=tipo;
        
    }

     public modificarTipo (param:string):string {

        return this.tipo=param
  }

    public modificarMarca (param:string):string {
          return this.marca=param
    }

    public modificarModelo(param:number):number {
        return this.modelo=param
    }

    public modificarVersion(param:string): string {
        return this.version=param
    }
}
