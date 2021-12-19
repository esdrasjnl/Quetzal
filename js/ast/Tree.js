"use strict";
class Tree {
    constructor() {
        this.i = 0;
    }
    generateDot(root) {
        var dotReport = "digraph Arbol_AST{ node[shape=\"box\"]";
        dotReport += this.dotTree(root);
        dotReport += "}";
        return dotReport;
    }
    dotTree(root) {
        var bodyFileTree = "";
        this.i++;
        var father = "n" + this.i;
        if (root.getValue() != null)
            bodyFileTree += father + "[label = \"" + root.getName() + "\\n" + root.getValue() + "\"];";
        else
            bodyFileTree += father + "[label = \"" + root.getName() + "\"];";
        for (let objNode of root.getChildren()) {
            bodyFileTree += father + " -> n" + (this.i + 1) + ";\n";
            bodyFileTree += this.dotTree(objNode);
        }
        return bodyFileTree;
    }
}
