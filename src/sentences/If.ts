class If extends Node_{
    public environment: Environment;

    constructor(name: number, value: number, line: number, column: number, children: Array<Node_>){
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        this.environment.previous = env;
        var condition = this.children[0];

        if (condition.run(this.environment)) {
            this.children[1].children.forEach(child => {
                child.run(this.environment);
            });
        } else {
            this.children[2].run(env);
        }
    }

    translate(): string {
        return "";
    }
}