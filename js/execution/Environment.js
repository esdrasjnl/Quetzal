"use strict";
class Environment {
    constructor(previous) {
        this.previous = previous;
        this.symbolsTable = new Map();
    }
    putSymbol(key, value) {
        this.symbolsTable.set(key, value);
    }
    getSymbol(key) {
        for (let env = this; env != null; env = env.previous) {
            if (env.symbolsTable.has(key)) {
                return env.symbolsTable.get(key);
            }
        }
        return null;
    }
}
