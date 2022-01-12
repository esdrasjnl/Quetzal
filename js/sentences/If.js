"use strict";
class If extends Node_ {
    constructor(name, value, line, column, children) {
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }
    run(env) {
        this.environment.previous = env;
        var condition = this.children[0];
        if (condition.run(this.environment)) {
            this.children[1].children.forEach(child => {
                child.run(this.environment);
            });
        }
        else {
            this.children[2].run(env);
        }
    }
    translate() {
        return "";
    }
    generateSymbol(env) {
        this.children[1].children.forEach(child => {
            if (child instanceof Declaration) {
                child.name_env = this.name_env + "_If";
                child.generateSymbol(env);
            }
            else if (child instanceof If) {
                child.name_env = this.name_env + "_If";
                child.generateSymbol(env);
            }
            else if (child instanceof Else) {
                child.name_env = this.name_env + "_If";
                child.generateSymbol(env);
            }
            else if (child instanceof While) {
                child.name_env = this.name_env + "_If";
                child.generateSymbol(env);
            }
            else if (child instanceof Do_While) {
                child.name_env = this.name_env + "_If";
                child.generateSymbol(env);
            }
        });
        if (this.children.length == 3) {
            this.children[2].generateSymbol(env);
        }
    }
}
