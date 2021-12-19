abstract class Node_{
    public name: number;
    public value: any;
    public line: number;
    public column: number;
    public children: Array<Node_>;
    public data: NodeData;
    private isVariable: boolean;
    private isFunction: boolean;

    constructor (name: number, value:any, line: number, column: number, children: Array<Node_>, data: NodeData, isFunction: boolean, isVariable: boolean){
        this.name = name;
        this.value = value;
        this.line = line;
        this.column = column;
        this.children = children;
        this.data = data;
        this.isFunction = isFunction;
        this.isVariable = isVariable;
    }

    public getValue():any{
        return this.value;
    }

    public getName():string{
        return NodeName.nodeName[this.name];
    }

    public getChildren(){
        return this.children;
    }

    abstract run(env: Environment): any;
    abstract translate(): string;
}