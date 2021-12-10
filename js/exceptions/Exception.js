"use strict";
class Exception extends Node_ {
    constructor(symbol, type) {
        super(symbol.data, symbol.value, symbol.line, symbol.column, new Array(), false, false);
        this.symbol = symbol;
        this.type = type;
    }
    static print() {
        this.exceptionList.forEach(exception => {
            console.error();
        });
    }
}
Exception.exceptionList = new Array();
