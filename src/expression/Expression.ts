class Expression extends Node_{
    constructor (children: Array<Node_>){
        super(NodeName.EXPRESSION, null, -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
    }

    run(env: Environment): any {
        if (this.children.length > 1) {
            return this.operate(this, env);
        } else if (this.children.length === 1) {
            if (this.children[0] instanceof PrimitiveData) {
                return this.children[0].value;
            } else { //IDENTIFIER
                return env.getSymbol(this.children[0].value);
            }
        }
    }

    translate(): string {
        return "";
    }

    public operate(n: Expression, env: Environment) {
        if (n.children.length === 3) {
            if (n.children[1].name === NodeName.ARITHMETIC) {
                return Arithmetic.run(n, env);
            }
            else if (n.children[1].name === NodeName.LOGIC) {
                return Logic.run(n, env);
            }
            else if (n.children[1].name === NodeName.RELATIONAL) {
                return Relational.run(n, env);
            }
        } else {
            if (n.children[0].name === NodeName.ARITHMETIC) {
                return Arithmetic.run(n, env);
            }
            else if (n.children[0].name === NodeName.LOGIC) {
                return Logic.run(n, env);
            }
        }
    }
}