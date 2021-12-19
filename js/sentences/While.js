"use strict";
class While extends Node_ {
    constructor(name, value, line, column, children) {
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }
    run(env) {
        this.environment.previous = env;
        var condition = this.children[0];
        while (condition.run(env)) {
            this.children[1].children.forEach(child => {
                child.run(env);
            });
        }
    }
    translate() {
        return "";
    }
}
