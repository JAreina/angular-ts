"use strict";
var numero;
numero = 11111;
console.log(numero);
var booleano = false;
// arrays
var arr = [1, 2, 3];
console.log("array", arr);
var arrr = ['a', 'b'];
console.log("array " + arrr);
//enums
var dia;
(function (dia) {
    dia[dia["MARTES"] = 0] = "MARTES";
    dia[dia["MIERCOLES"] = 1] = "MIERCOLES";
})(dia || (dia = {}));
;
var dia2;
(function (dia2) {
    dia2[dia2["JUEVES"] = 0] = "JUEVES";
    dia2[dia2["VIERNES"] = 1] = "VIERNES";
})(dia2 || (dia2 = {}));
;
var primerDia;
primerDia = dia.MARTES;
console.log("enum: " + primerDia);
console.log("enum VALOR:  " + dia[0]);
console.log("enum VALOR: " + dia[dia.MARTES]);
// any
var vari;
