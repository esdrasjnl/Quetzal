class Expression extends Node_{

    constructor (children: Array<Node_>){
        super(NodeName.EXPRESSION, null, -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);

    }

    run() {
        
    }

    translate(): string {
        return "";
    }
}