import { Vehiculo} from "./claseVehiculo";


class  RegistroAutomotor{
    
    private titular:string
    private radicacion:string
    private vehiculosRegistrados:Vehiculo[]

    public constructor( titular:string, radicacion:string) {
        
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
        if (propiedadAModificar=="tipo"){
            vehiculoAModificar.modificarTipo(nuevoValor)
        }else if(propiedadAModificar=="marca"){
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

let vehiculo1:Vehiculo= new Vehiculo("auto","Ford","focus",2024)//creando vehiculo

let registro1:RegistroAutomotor=new RegistroAutomotor("Perez Juan","Bolivar")//creando registro
registro1.agregarVehiculo(vehiculo1)

console.log(registro1)//prueba de metodo agregar vheiculo
let vehiculo2:Vehiculo=new Vehiculo("moto","Honda","cb200",2022);//creando vehiculo2 para agregar a registro
registro1.agregarVehiculo(vehiculo2)
console.log(registro1)//prueba de metodo agregar vheiculo
registro1.bajaVehiculo(vehiculo1)
console.log(registro1)//prueba de metodo de baja de vehiculo
registro1.modificarVehiculo(vehiculo2,"modelo",2024)
console.log(registro1)//prueba de metodo de modificar registro