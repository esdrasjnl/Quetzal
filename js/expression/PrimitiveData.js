"use strict";
class PrimitiveData extends Node_ {
    constructor(name, value, line, column, returnType) {
        super(name, value, line, column, new Array(), new NodeData(-1, returnType, -1, -1), false, false);
    }
    run() {
    }
    translate() {
        return "";
    }
}
