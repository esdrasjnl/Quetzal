"use strict";
class Relational {
    static run(n) {
        if (n.children[1].value === "==") {
            return (n.children[0].run() == n.children[2].run());
        }
        else if (n.children[1].value === "!=") {
            return (n.children[0].run() != n.children[2].run());
        }
        else if (n.children[1].value === ">") {
            return (n.children[0].run() > n.children[2].run());
        }
        else if (n.children[1].value === "<") {
            return (n.children[0].run() < n.children[2].run());
        }
        else if (n.children[1].value === ">=") {
            return (n.children[0].run() >= n.children[2].run());
        }
        else if (n.children[1].value === "<=") {
            return (n.children[0].run() <= n.children[2].run());
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
