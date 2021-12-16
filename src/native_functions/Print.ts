class Print extends Node_{
    public message: Expression;
    constructor(value: any, line: number, column: number, message: Expression ) {
        super(NodeName.PRINT, value, line, column, new Array<Node_>(), new NodeData(-1, -1, -1, -1), false, false);
        this.message = message;
    }

    run(env: Environment) {
        document.getElementById("console").value = document.getElementById("console").value + this.message.run(env) + (this.value == "println" ? "\n" : "");
    }

    translate(): string {
        return "";
    }
}