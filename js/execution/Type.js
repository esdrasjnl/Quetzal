"use strict";
var primitive;
(function (primitive) {
    primitive[primitive["INTEGER"] = 0] = "INTEGER";
    primitive[primitive["DOUBLE"] = 1] = "DOUBLE";
    primitive[primitive["BOOLEAN"] = 2] = "BOOLEAN";
    primitive[primitive["STRING"] = 3] = "STRING";
    primitive[primitive["CHAR"] = 4] = "CHAR";
    primitive[primitive["STRUCT"] = 5] = "STRUCT";
    primitive[primitive["ARRAY"] = 6] = "ARRAY";
    primitive[primitive["ERROR"] = 7] = "ERROR";
    primitive[primitive["NA"] = 8] = "NA";
})(primitive || (primitive = {}));
var rol;
(function (rol) {
    rol[rol["VARIABLE_LOCAL"] = 0] = "VARIABLE_LOCAL";
    rol[rol["VARIABLE_GLOBAL"] = 1] = "VARIABLE_GLOBAL";
    rol[rol["FUNCTION"] = 2] = "FUNCTION";
})(rol || (rol = {}));
class Type {
    constructor(TypePrimirive, RolPrimirive) {
        this.TypePrimitive = TypePrimirive;
        this.RolPrimitive = RolPrimirive;
    }
}
