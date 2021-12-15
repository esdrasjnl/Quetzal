"use strict";
class Arithmetic {
    static run(n) {
        if (n.children[1].value === "/") {
            return n.children[0].run() / n.children[2].run();
        }
        else if (n.children[1].value === "*") {
            return n.children[0].run() * n.children[2].run();
        }
        else if (n.children[1].value === "+") {
            return n.children[0].run() + n.children[2].run();
        }
        else if (n.children[1].value === "-") {
            return n.children[0].run() - n.children[2].run();
        }
        else if (n.children[0].value === "-") {
            return -1 * n.children[1].run();
        }
        return -1;
    }
    translate() {
        return "";
    }
}
