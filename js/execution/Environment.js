"use strict";
class Environment {
    constructor(previous) {
        this.previous = previous;
        this.symbolsTable = new Map();
    }
    putSymbol(key, value) {
        this.symbolsTable.set(key, value);
    }
    assign(key, value) {
        for (let env = this; env != null; env = env.previous) {
            if (env.symbolsTable.has(key)) {
                var symbol = env.getSymbol(key);
                if (symbol != undefined) {
                    symbol.value = value;
                    env.symbolsTable.set(key, symbol);
                    break;
                }
            }
        }
    }
    getSymbol(key) {
        for (let env = this; env != null; env = env.previous) {
            if (env.symbolsTable.has(key)) {
                return env.symbolsTable.get(key);
            }
        }
    }
}
