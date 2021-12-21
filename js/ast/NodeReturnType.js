"use strict";
class NodeReturnType {
    static getType(type) {
        switch (type) {
            case "int":
                return this.INTEGER;
                break;
            case "double":
                return this.DOUBLE;
                break;
            case "boolean":
                return this.BOOLEAN;
                break;
            case "String":
                return this.STRING;
                break;
            case "char":
                return this.CHAR;
                break;
            case "Struct":
                return this.STRUCT;
                break;
            case "Array":
                return this.ARRAY;
                break;
            default:
                return this.STRING;
                break;
        }
    }
}
NodeReturnType.INTEGER = 1;
NodeReturnType.DOUBLE = 2;
NodeReturnType.BOOLEAN = 3;
NodeReturnType.STRING = 4;
NodeReturnType.CHAR = 5;
NodeReturnType.STRUCT = 6;
NodeReturnType.ARRAY = 7;
NodeReturnType.nodeReturnType = [
    "INTEGER",
    "DOUBLE",
    "BOOLEAN",
    "STRING",
    "CHAR",
    "STRUCT",
    "ARRAY",
];
