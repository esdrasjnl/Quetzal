class Type_ extends Node_{
    constructor (value: string, line: number, column: number) {
        super(NodeName.TYPE, value, line, column, [], new NodeData(-1, -1, -1, -1), false, false);
    }

    run(env: Environment | null) {
        return this.value;
    }

    translate(): string {
        return "";
    }
}