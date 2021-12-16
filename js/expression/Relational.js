"use strict";
class Relational {
    static run(n, env) {
        if (n.children[1].value === "==") {
            return (n.children[0].run(env) == n.children[2].run(env));
        }
        else if (n.children[1].value === "!=") {
            return (n.children[0].run(env) != n.children[2].run(env));
        }
        else if (n.children[1].value === ">") {
            return (n.children[0].run(env) > n.children[2].run(env));
        }
        else if (n.children[1].value === "<") {
            return (n.children[0].run(env) < n.children[2].run(env));
        }
        else if (n.children[1].value === ">=") {
            return (n.children[0].run(env) >= n.children[2].run(env));
        }
        else if (n.children[1].value === "<=") {
            return (n.children[0].run(env) <= n.children[2].run(env));
        }
        else if (n.name === NodeName.PRIMITIVE_DATA) {
            return n.value;
        }
        return false;
    }
    translate() {
        return "";
    }
}
