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
        this.name_env = '';
    }
    getValue() {
        return this.value;
    }
    getName() {
        return NodeName.nodeName[this.name - 1];
    }
    getChildren() {
        return this.children;
    }
}
