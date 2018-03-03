"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animales_1 = require("./animales");
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(nombre, aletas, color) {
        var _this = _super.call(this, nombre, aletas) || this;
        _this.color = color;
        return _this;
    }
    //override de animal
    Pez.prototype.moverse = function () {
        console.log(this.nombre + " HAS LLEGADO...");
    };
    Pez.prototype.hablar = function () {
        console.log("el " + this.nombre + " ha dicho HOLA");
    };
    return Pez;
}(animales_1.Animal));
exports.Pez = Pez;
