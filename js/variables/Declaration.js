"use strict";
class Declaration extends Node_ {
    constructor(line, column, children) {
        super(NodeName.DECLARATION, "", line, column, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
    }
    translate() {
        return "";
    }
}
