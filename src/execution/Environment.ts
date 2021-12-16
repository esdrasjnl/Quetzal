class Environment {
    private previous: Environment | null;
    private symbolsTable: Map<string, Node_>;

    constructor(previous: Environment | null){
        this.previous = previous;
        this.symbolsTable = new Map();
    }

    public putSymbol(key: string, value: Node_) {
        this.symbolsTable.set(key, value);
    }

    public getSymbol(key: string) {
        for(let env: Environment | null = this; env != null ; env = env.previous){
            if(env.symbolsTable.has(key)) {
                return env.symbolsTable.get(key);
            }
        }

        return null;
    }
}