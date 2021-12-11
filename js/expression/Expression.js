"use strict";
class Expression extends Node_ {
    constructor(children) {
        super(NodeName.EXPRESSION, null, -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run() {
    }
    translate() {
        return "";
    }
}
