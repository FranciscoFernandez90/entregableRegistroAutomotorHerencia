export class Vehiculo {
   
    private marca:string;
    private version:string;
    private modelo:number;

public constructor(marca:string,version:string,modelo:number) {
        this.marca=marca;
        this.version=version;
        this.modelo=modelo;
        
        
    }

    public modificarModelo(param:any):number {
        return this.modelo=param
    }

    public modificarVersion(param:any): string {
        return this.version=param
    }

    public modificarMarca(param:any): string {
        return this.marca=param
    }
    
}
