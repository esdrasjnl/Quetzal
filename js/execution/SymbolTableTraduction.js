"use strict";
class SymbolTableTraduction {
    constructor(name, isGlobal) {
        this.name = name;
        this.map = new Map();
        this.isGlobal = isGlobal;
    }
}
