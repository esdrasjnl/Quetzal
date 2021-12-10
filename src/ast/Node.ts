abstract class Node_{
    public data: NodeData;
    public value: string;
    public line: number;
    public column: number;
    private children: Array<Node_>;
    private isVariable: boolean;
    private isFunction: boolean;

    constructor (data: NodeData, value:string, line: number, column: number, children: Array<Node_>, isFunction: boolean, isVariable: boolean){
        this.data = data;
        this.value = value;
        this.line = line;
        this.column = column;
        this.children = children;
        this.isFunction = isFunction;
        this.isVariable = isVariable;
    }
}