"use strict";
class Print extends Node_ {
    constructor(value, line, column, message) {
        super(NodeName.PRINT, value, line, column, message, new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        var console_txt = document.getElementById("console").value + this.children[0].run(env) + (this.value == "println" ? "\n" : "");
        document.getElementById("console").value = console_txt;
    }
    translate() {
        return "";
    }
}
