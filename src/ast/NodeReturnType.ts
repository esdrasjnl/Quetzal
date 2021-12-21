class NodeReturnType{
    public static readonly INTEGER = 1;
    public static readonly DOUBLE = 2;
    public static readonly BOOLEAN = 3;
    public static readonly STRING = 4;
    public static readonly CHAR = 5;
    public static readonly STRUCT = 6;
    public static readonly ARRAY = 7;

    public static readonly nodeReturnType = [
        "INTEGER",
        "DOUBLE",
        "BOOLEAN",
        "STRING",
        "CHAR",
        "STRUCT",
        "ARRAY",
    ];

    public static getType(type: string): number{
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