"use strict";
class Assignment extends Node_ {
    constructor(line, column, children) {
        super(NodeName.ASSIGNMENT, "", line, column, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        if (env != null) {
            var n = new Expression([new PrimitiveData(-1, this.children[1].run(env), -1, -1, -1)]);
            env.assign(this.children[0].value, n);
        }
    }
    translate() {
        return "";
    }
    generateSymbol(env) {
    }
}
