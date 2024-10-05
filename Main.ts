import {RegistroAutomotor} from "./registro"
import { Vehiculo } from "./claseVehiculo"
import {Moto} from "./claseMoto"
import {Camion} from "./claseCamion"

//creando vehiculo
let vehiculo1:Vehiculo= new Vehiculo("Ford","focus",2024);

//creando registro
let registro1:RegistroAutomotor=new RegistroAutomotor("Perez Juan","Bolivar");

//Agregando el vehiculo
registro1.agregarVehiculo(vehiculo1)
console.log(registro1)

//Pruebas del ejercicio anterior de composicion
/*let vehiculo2:Vehiculo=new Vehiculo("Honda","cb200",2022);//creando vehiculo2 para agregar a registro
registro1.agregarVehiculo(vehiculo2)
console.log(registro1)//prueba de metodo agregar vheiculo
registro1.bajaVehiculo(vehiculo1)
console.log(registro1)//prueba de metodo de baja de vehiculo
registro1.modificarVehiculo(vehiculo2,"version","storm");
registro1.modificarVehiculo(vehiculo2,"modelo",2024);
registro1.modificarVehiculo(vehiculo2,"marca","gilera");
console.log(registro1)//prueba de metodo de modificar registro*/

//Creando el objeto moto
let moto1:Moto=new Moto("ktm","duke",2015);
//Se agrega la moto al registro
registro1.agregarVehiculo(moto1);
console.log(registro1);
//Se modifica la moto agregada
registro1.modificarVehiculo(moto1,"modelo",2024);
registro1.modificarVehiculo(moto1,"marca","ducati");
registro1.modificarVehiculo(moto1,"version","monster");
console.log(registro1);
//Se elimina la moto agregada
registro1.bajaVehiculo(moto1);
console.log(registro1);

//Se crea el objeto camion
let camion1:Camion=new Camion("volvo","FH",2020)

// Se agrega el camion al registro
registro1.agregarVehiculo(camion1);
console.log(registro1);

//Se modifica el camion agregado
registro1.modificarVehiculo(camion1,"marca","Iveco");
registro1.modificarVehiculo(camion1,"modelo",2023);
registro1.modificarVehiculo(camion1,"version","Iveco");
console.log(registro1);

//se elimina el camion agregado
registro1.bajaVehiculo(camion1);
console.log(registro1);


