class Do_While extends Node_{
    public environment: Environment;

    constructor(name: number, value: number, line: number, column: number, children: Array<Node_>){
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        this.environment.previous = env;
        var condition = this.children[1];

        do{
            this.children[0].children.forEach(child => {
                child.run(env);
            });
        }
        while (condition.run(env));
    }

    translate(): string {
        return "";
    }
}