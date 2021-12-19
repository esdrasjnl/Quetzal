"use strict";
class Else extends Node_ {
    constructor(children) {
        super(NodeName.ELSE, "else", -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
        this.environment = new Environment(null);
    }
    run(env) {
        this.environment.previous = env;
        this.children[0].children.forEach(child => {
            child.run(this.environment);
        });
    }
    translate() {
        return "";
    }
}
