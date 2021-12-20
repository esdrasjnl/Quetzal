class For extends Node_{
    public environment: Environment;

    constructor(name: number, value: number, line: number, column: number, children: Array<Node_>){
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        
    }
    translate(): string {
        return "";
    }
}