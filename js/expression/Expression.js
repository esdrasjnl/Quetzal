"use strict";
class Expression extends Node_ {
    constructor(children) {
        super(NodeName.EXPRESSION, null, -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run() {
        if (this.children.length > 1) {
            return this.operate(this);
        }
        else if (this.children.length === 1) {
            if (this.children[0] instanceof PrimitiveData) {
                return this.children[0].value;
            }
            else { //VARIABLE
            }
        }
    }
    translate() {
        return "";
    }
    operate(n) {
        if (n.children.length === 3) {
            if (n.children[1].name === NodeName.ARITHMETIC) {
                return Arithmetic.run(n);
            }
            else if (n.children[1].name === NodeName.LOGIC) {
                return Logic.run(n);
            }
            else if (n.children[1].name === NodeName.RELATIONAL) {
                return Relational.run(n);
            }
        }
        else {
            if (n.children[0].name === NodeName.ARITHMETIC) {
                return Arithmetic.run(n);
            }
            else if (n.children[0].name === NodeName.LOGIC) {
                return Logic.run(n);
            }
        }
    }
}
