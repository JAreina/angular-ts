"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pez_1 = require("./model/pez");
var pez1;
pez1 = new pez_1.Pez("tiburón", 100, "gris");
console.log(pez1);
console.log(pez1.moverse());
// usar metodos de la clase Pez CONVERSION DE TIPOS
console.log(pez1.hablar());
// CONVERSION DE TIPOS TAMBIEN ASI
console.log(pez1.hablar());
