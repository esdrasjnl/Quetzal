class Else extends Node_ {
    public environment: Environment;

    constructor (children: Array<Node_>) {
        super(NodeName.ELSE, "else", -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        this.environment.previous = env;

        this.children[0].children.forEach(child => {
            child.run(this.environment);
        });
    }

    translate(): string {
        return "";
    }
}