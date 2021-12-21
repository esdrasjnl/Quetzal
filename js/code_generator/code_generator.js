"use strict";
class code_generator {
    constructor() {
        this.count_label = 0;
        this.count_temp = 0;
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
}
code_generator.ObjCodGen = new code_generator();
