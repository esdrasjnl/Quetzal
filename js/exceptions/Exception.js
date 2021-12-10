"use strict";
class Exception extends Node_ {
    constructor(value, line, column, type) {
        super(NodeToken.UNKNOWN, value, line, column, new Array(), new NodeData(0, 0, 0, 0), false, false);
        this.type = type;
    }
    static print() {
        this.exceptionList.forEach(exception => {
            console.error(ExceptionType.type[exception.type] + " error: " + exception.value + " at line " + exception.line + " and column " + exception.column);
        });
    }
}
Exception.exceptionList = new Array();
