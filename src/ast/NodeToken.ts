class NodeToken{
    public static readonly UNKNOWN = 1;
    public static readonly SYMBOL = 2;
    public static readonly ARITHMETIC = 3;
    public static readonly TYPE = 4;
    public static readonly NATIVE_MATH_FUNCTION = 5;
    public static readonly NATIVE_TYPE_FUNCTION = 6;
    public static readonly NATIVE_STRING_FUNCTION = 7;
    public static readonly NATIVE_ARRAY_FUNCTION = 8;
    public static readonly RELATIONAL = 9;
    public static readonly LOGIC = 10;
    public static readonly STRING_OPERATOR = 11;
    public static readonly CONDITIONAL = 12;
    public static readonly LOOP = 13;
    public static readonly INSTRUCTION = 14;

    public static readonly nodeToken = ["UNKNOWN",
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

    constructor(){

    }
}