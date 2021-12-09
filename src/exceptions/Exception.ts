import {Node} from "../ast/Node";

export enum ExceptionType{
    LEXICAL,
    SYNTACTIC,
    SEMANTIC
}

export class Exception{
    constructor (public symbol: Node, public type: ExceptionType, public message: string) {
        
    }
}

export let exceptionList = new Array<Node>();