class Id extends Node_ {
    constructor (name: number, value: string, line: number, column: number) {
        super(name, value, line, column, [], new NodeData(-1, -1, -1, -1 ), false, false);
    }

    run(env: Environment | null) {
        return this.value;
    }

    translate(): string {
        return "";
    }
}