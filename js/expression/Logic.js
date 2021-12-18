"use strict";
class Logic {
    static run(n, env) {
        if (n.children[1].value === "&&") {
            return (n.children[0].run(env) && n.children[2].run(env));
        }
        else if (n.children[1].value === "||") {
            return (n.children[0].run(env) || n.children[2].run(env));
        }
        else if (n.children[0].value === "!") {
            return !n.children[1].run(env);
        }
        return false;
    }
    translate() {
        return "";
    }
}
