"use strict";
class Id extends Node_ {
    constructor(name, value, line, column) {
        super(name, value, line, column, [], new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        return this.value;
    }
    translate() {
        return "";
    }
}
