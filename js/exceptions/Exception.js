"use strict";
class Exception extends Node_ {
    constructor(value, line, column, type) {
        super(NodeToken.UNKNOWN, value, line, column, new Array(), new NodeData(0, 0, 0, 0), false, false);
        this.type = type;
    }
    static print() {
        this.exceptionList.forEach(exception => {
            var message = ">>" + ExceptionType.type[exception.type] + " error: " + exception.value + " at line " + exception.line + " and column " + exception.column;
            document.getElementById("console").value = document.getElementById("console").value + message + "\n";
        });
    }
    run() {
    }
    translate() {
        return "";
    }
}
Exception.exceptionList = new Array();
