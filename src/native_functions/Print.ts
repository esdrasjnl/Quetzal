class Print extends Node_{
    constructor(value: any, line: number, column: number, message: Array<Node_> ) {
        super(NodeName.PRINT, value, line, column, message, new NodeData(-1, -1, -1, -1), false, false);
    }

    run(env: Environment) {
        var console_txt = document.getElementById("console").value + this.children[0].run(env) + (this.value == "println" ? "\n" : "");
        document.getElementById("console").value = console_txt;
    }

    translate(): string {
        return "";
    }

    generateSymbol(env: SymbolTableTraduction): void {
        
    }
}