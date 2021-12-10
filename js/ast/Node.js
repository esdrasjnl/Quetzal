"use strict";
class Node_ {
    constructor(name, value, line, column, children, data, isFunction, isVariable) {
        this.name = name;
        this.value = value;
        this.line = line;
        this.column = column;
        this.children = children;
        this.data = data;
        this.isFunction = isFunction;
        this.isVariable = isVariable;
    }
}
