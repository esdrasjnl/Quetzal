class Declaration extends Node_{
    constructor(line: number, column: number, children: Array<Node_>) {
        super(NodeName.DECLARATION, "", line, column, children, new NodeData(-1, -1, -1, -1), false, false);
    }

    run(env: Environment | null) {
        
    }

    translate(): string {
        return "";
    }
}