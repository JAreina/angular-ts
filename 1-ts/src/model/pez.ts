import {Animal} from "./animales";


export class Pez extends Animal{
    constructor(nombre:string, aletas:number,private color:string) {
        super(nombre,aletas)
    }

    moverse():void{
        console.log(`${this.nombre} HAS LLEGADO...`);


    }
    
    
}