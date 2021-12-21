"use strict";
class Expression extends Node_ {
    constructor(children) {
        super(NodeName.EXPRESSION, null, -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        var _a, _b;
        if (this.children.length > 1) {
            return this.operate(this, env);
        }
        else if (this.children.length === 1) {
            if (this.children[0] instanceof PrimitiveData) {
                return this.children[0].value;
            }
            else { //IDENTIFIER
                return (_b = (_a = env.getSymbol(this.children[0].value)) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.run(env);
            }
        }
    }
    translate() {
        return "";
    }
    operate(n, env) {
        if (n.children.length === 3) {
            if (n.children[1].name === NodeName.ARITHMETIC) {
                return Arithmetic.run(n, env);
            }
            else if (n.children[1].name === NodeName.LOGIC) {
                return Logic.run(n, env);
            }
            else if (n.children[1].name === NodeName.RELATIONAL) {
                return Relational.run(n, env);
            }
        }
        else {
            if (n.children[0].name === NodeName.ARITHMETIC) {
                return Arithmetic.run(n, env);
            }
            else if (n.children[0].name === NodeName.LOGIC) {
                return Logic.run(n, env);
            }
        }
    }
}
