class Exception extends Node_ {
    public static exceptionList = new Array<Node_>();
    private symbol: Node_;
    private type: number;

    constructor (symbol: Node_, type: number) {
        super(symbol.data, symbol.value, symbol.line, symbol.column, new Array(), false, false);
        this.symbol = symbol;
        this.type = type;
    }

    private static print(){
        this.exceptionList.forEach(exception => {
            console.error();
        });
    }
}