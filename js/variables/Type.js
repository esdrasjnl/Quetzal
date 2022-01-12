"use strict";
class Type_ extends Node_ {
    constructor(value, line, column) {
        super(NodeName.TYPE, value, line, column, [], new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        return this.value;
    }
    translate() {
        return "";
    }
    generateSymbol(env) {
    }
}
