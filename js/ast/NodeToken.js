"use strict";
class NodeToken {
    constructor() {
    }
}
NodeToken.UNKNOWN = 1;
NodeToken.SYMBOL = 2;
NodeToken.ARITHMETIC = 3;
NodeToken.TYPE = 4;
NodeToken.NATIVE_MATH_FUNCTION = 5;
NodeToken.NATIVE_TYPE_FUNCTION = 6;
NodeToken.NATIVE_STRING_FUNCTION = 7;
NodeToken.NATIVE_ARRAY_FUNCTION = 8;
NodeToken.RELATIONAL = 9;
NodeToken.LOGIC = 10;
NodeToken.STRING_OPERATOR = 11;
NodeToken.CONDITIONAL = 12;
NodeToken.LOOP = 13;
NodeToken.INSTRUCTION = 14;
NodeToken.nodeToken = ["UNKNOWN",
    "SYMBOL",
    "ARITHMETIC",
    "TYPE",
    "NATIVE_MATH_FUNCTION",
    "NATIVE_TYPE_FUNCTION",
    "NATIVE_STRING_FUNCTION",
    "NATIVE_ARRAY_FUNCTION",
    "RELATIONAL",
    "LOGIC",
    "STRING_OPERATOR",
    "CONDITIONAL",
    "LOOP",
    "INSTRUCTION"];
