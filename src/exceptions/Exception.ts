class Exception extends Node_ {
    public static exceptionList = new Array<Exception>();
    private type: number;

    constructor (value: string, line: number, column: number, type: number) {
        super(NodeToken.UNKNOWN, value, line, column, new Array<Node_>(), new NodeData(0, 0, 0, 0), false, false);
        this.type = type;
    }

    private static print(){
        this.exceptionList.forEach(exception => {
            console.error();
            var console_txt = document.getElementById("console").value + ExceptionType.type[exception.type] + " error: " + exception.value + " at line " + exception.line + " and column " + exception.column + "\n";
            document.getElementById("console").value = console_txt;
        });
    }

    run() {
        
    }

    translate(): string {
        return "";
    }

    generateSymbol(env: SymbolTableTraduction): void {
        
    }
}