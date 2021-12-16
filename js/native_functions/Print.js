"use strict";
class Print extends Node_ {
    constructor(value, line, column, message) {
        super(NodeName.PRINT, value, line, column, new Array(), new NodeData(-1, -1, -1, -1), false, false);
        this.message = message;
    }
    run(env) {
        document.getElementById("console").value = document.getElementById("console").value + this.message.run(env) + (this.value == "println" ? "\n" : "");
    }
    translate() {
        return "";
    }
}