import {Animal} from "./animales";


export class Pez extends Animal{
    constructor(nombre:string, aletas:number,private color:string) {
        super(nombre,aletas)
    }


    //override de animal
    moverse():void{
        console.log(`${this.nombre} HAS LLEGADO...`);


    }


    hablar(){
        console.log(`el ${this.nombre} ha dicho HOLA`)
    }
    
    
}