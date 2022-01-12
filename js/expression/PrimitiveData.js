"use strict";
class PrimitiveData extends Node_ {
    constructor(name, value, line, column, returnType) {
        super(name, value, line, column, new Array(), new NodeData(-1, returnType, -1, -1), false, false);
        this.temp = "";
        this.labelTrue = "";
        this.labelFalse = "";
        this.stringValue = "";
    }
    run() {
        return this.value;
    }
    translate() {
        //---- integer, double
        if (this.name == 1 || this.name == 2) {
            this.temp = this.value;
        }
        //--- boolean
        if (this.name = 3) {
            if (this.value == 'true') {
                this.temp = '1';
            }
            else if (this.value == 'false') {
                this.temp = '0';
            }
        }
        //-----string
        if (this.name = 4) {
            this.temp = code_generator.getInstance().getTempCurrent();
            this.stringValue = this.value;
            return code_generator.getInstance().generatorString(this.temp, this.stringValue);
        }
        //-----char
        if (this.name = 5) {
            this.temp = this.value.charCodeAt(0);
        }
        return "";
    }
    generateSymbol(env) {
    }
}
