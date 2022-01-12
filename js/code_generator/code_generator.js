"use strict";
class code_generator {
    constructor() {
        this.count_label = 0;
        this.count_temp = 0;
        this.count_varGlobal = 0;
        this.count_varLocal = 0;
    }
    static getInstance() {
        return this.ObjCodGen;
    }
    restartCounts() {
        this.count_label = 0;
        this.count_temp = 0;
    }
    getLabelCurrent() {
        let newLabel = "L" + this.count_label;
        this.count_label++;
        return newLabel;
    }
    getTempCurrent() {
        let newTemp = "t" + this.count_temp;
        this.count_temp++;
        return newTemp;
    }
    generatorString(temp, stringValue) {
        let addString = "";
        addString += "\t" + temp + " = H;\n";
        addString += "\tH = H + 1;\n";
        if (stringValue.length == 0) {
            addString += "\theap[(int)" + (temp) + "] = 0;\n";
        }
        else {
            addString += "\theap[(int)" + (temp) + "] = " + stringValue.length + ";\n";
            //char[] arrayChar = stringAgregar.ToCharArray();
            let arrayChar = Array.from(stringValue);
            let i;
            for (i = 0; i < arrayChar.length; i++) {
                let tempActual = this.getTempCurrent();
                addString += "\t" + tempActual + " = H;\n";
                addString += "\tHP = HP + 1;\n";
                addString += "\theap[(int)" + tempActual + "] = " + arrayChar[i] + ";\n";
            }
        }
        return addString;
    }
}
code_generator.ObjCodGen = new code_generator();
