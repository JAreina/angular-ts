import {Animal} from "./model/animales"

import {Pez} from "./model/pez"

let pez1: Animal;
pez1 = new Pez("tiburón",100,"gris")

console.log(pez1 )

console.log(pez1.moverse())


// usar metodos de la clase Pez CONVERSION DE TIPOS
console.log((pez1 as Pez).hablar());


// CONVERSION DE TIPOS TAMBIEN ASI
console.log((<Pez>pez1).hablar());
