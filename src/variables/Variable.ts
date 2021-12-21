class Variable {
    public name: string;
    public type: number;
    public value: Node_ | null;

    constructor (type: number, name: string, value: Node_ | null){
        this.name = name;
        this.type = type;
        this.value = value;
    }

    run(env: Environment | null) {
        
    }

    translate(): string {
        return "";
    }
}