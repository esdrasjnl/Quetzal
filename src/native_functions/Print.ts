class Print extends Node_{
    public message: Node_;
    constructor(value: any, line: number, column: number, message: Node_, ) {
        super(NodeName.PRINT, value, line, column, new Array<Node_>(), new NodeData(-1, -1, -1, -1), false, false);
        this.message = message;
    }

    run() {
        document.getElementById("console").value = this.message.run() + this.value == "println" ? "\n" : "";
    }

    translate(): string {
        return "";
    }
}