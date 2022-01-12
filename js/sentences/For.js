"use strict";
class For extends Node_ {
    constructor(name, value, line, column, children) {
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }
    run(env) {
    }
    translate() {
        return "";
    }
    generateSymbol(env) {
    }
}
