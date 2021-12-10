"use strict";
class Node_ {
    constructor(data, value, line, column, children, isFunction, isVariable) {
        this.data = data;
        this.value = value;
        this.line = line;
        this.column = column;
        this.children = children;
        this.isFunction = isFunction;
        this.isVariable = isVariable;
    }
}
