class PrimitiveData extends Node_{
    constructor(name: number, value: any, line: number, column: number, returnType: number) {
        super(name, value, line, column, new Array<Node_>(), new NodeData(-1, returnType, -1, -1), false, false);
    }

    run() {
        return this.value;
    }

    translate(): string {
        return "";
    }
}