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

    abstract run(env: Environment | null): any;
    abstract translate(): string;
    
    public getValue():any{
        return this.value;
    }

    public getName():string{
        return NodeName.nodeName[this.name - 1];
    }

    public getChildren(){
        return this.children;
    }

}