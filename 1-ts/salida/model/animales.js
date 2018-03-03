"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    //con modificadores de acceso private, public, protected
    // no hace falta declarar variables y luego en el contructor asignarlas con this
    function Animal(_nombre, extremidades) {
        this._nombre = _nombre;
        this.extremidades = extremidades;
    }
    // una forma 
    Animal.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Animal.prototype.getNombre = function () {
        return this._nombre;
    };
    Object.defineProperty(Animal.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        // otra forma de crear setter getteer
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
