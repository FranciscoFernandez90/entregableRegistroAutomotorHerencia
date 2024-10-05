import { Vehiculo} from "./claseVehiculo";


export class  RegistroAutomotor{
    
    private titular:string
    private radicacion:string
    private vehiculosRegistrados:Vehiculo[]
    

    public constructor(titular:string, radicacion:string) {
       
        this.titular=titular;
        this.radicacion=radicacion;
        this.vehiculosRegistrados=[]
    }

    public agregarVehiculo(registro:Vehiculo):void {
        this.vehiculosRegistrados.push(registro)
        
    }

    public bajaVehiculo(registro:Vehiculo):void{
       this.vehiculosRegistrados= this.vehiculosRegistrados.filter(rodado=>rodado != registro)
        
    }

    public modificarVehiculo(vehiculoAModificar:Vehiculo,propiedadAModificar:any,nuevoValor:any):void{
        if(propiedadAModificar=="marca"){
            vehiculoAModificar.modificarMarca(nuevoValor)
        }else if(propiedadAModificar=="modelo"){
            vehiculoAModificar.modificarModelo(nuevoValor)
        }else if(propiedadAModificar=="version"){
            vehiculoAModificar.modificarVersion(nuevoValor)
        }else {
            return
        }

    }

}

