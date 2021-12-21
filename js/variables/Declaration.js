"use strict";
class Declaration extends Node_ {
    constructor(line, column, children) {
        super(NodeName.DECLARATION, "", line, column, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        var type = NodeReturnType.getType(String(this.children[0].value));
        if (this.children.length == 3) {
            var id = this.children[1].value;
            var value = this.children[2];
            var variable = new Variable(type, id, value);
            env === null || env === void 0 ? void 0 : env.putSymbol(id, variable);
        }
        else {
            this.children[1].children.forEach(child => {
                var id = child.value;
                var variable = new Variable(type, id, null);
                env === null || env === void 0 ? void 0 : env.putSymbol(id, variable);
            });
        }
    }
    translate() {
        return "";
    }
}
