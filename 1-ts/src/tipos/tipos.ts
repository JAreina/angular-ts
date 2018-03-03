let numero: number;

numero =11111;

console.log(numero)

let booleano :boolean=false;


// arrays

let arr:number[]=[1,2,3];
console.log("array" ,arr);


let arrr:Array<string>=['a','b'];

console.log("array "+arrr);


//enums

enum dia {MARTES,MIERCOLES};
enum dia2 {JUEVES,VIERNES};

let primerDia : dia;
primerDia = dia.MARTES;

console.log("enum: "+primerDia);

console.log("enum VALOR:  "+dia[0]);
console.log("enum VALOR: "+dia[dia.MARTES]);



// any

let vari:any;