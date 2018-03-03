class Animal {
   //con modificadores de acceso private, public, protected
   // no hace falta declarar variables y luego en el contructor asignarlas con this
    constructor(protected _nombre:string, public patas:number) {
     
    }

    // una forma 
    setNombre (nombre:string):void{
        this.nombre = nombre;
    }

   getNombre():string{
       return this._nombre;
   }
// otra forma de crear setter getteer
    set nombre(nombre:string){
        this._nombre =nombre;
    }
get nombre():string{
    return this._nombre;
}
}
