import { Token } from "./NodeData";
import { Name } from "./NodeData";
import { VariableType } from "./NodeData";
import { FunctionType } from "./NodeData";

export abstract class Node{
    private token: Token;
    private variableTypy: VariableType;
    private children: Array<Node>;
    private isVariable: boolean;
    private isFunction: boolean;

    constructor (token: Token, name: Name, variableType: VariableType, children: Array<Node>, isFunction: boolean, isVariable: boolean){
        this.token = token;
        this.variableTypy = variableType;
        this.children = children;
        this.isFunction = isFunction;
        this.isVariable = isVariable;
    }
}