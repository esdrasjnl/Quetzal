class Logic{
    static run(n: Node_): boolean{
        if (n.children[1].value === "&&") {
            return (n.children[0].run() && n.children[2].run());
        } else if (n.children[1].value === "||") {
            return (n.children[0].run() || n.children[2].run());
        }  else if (n.children[0].value === "!") {
            return !n.children[1].run();
        }

        return false;
    }

    translate(): string {
        return "";
    }
}