class code_generator{
    public count_label: number;
    public count_temp: number;
    private static ObjCodGen: code_generator = new code_generator();

    constructor(){
        this.count_label = 0;
        this.count_temp = 0;
    }

    public static getInstance():code_generator{
        return this.ObjCodGen;
    }

    public restartCounts():void{
        this.count_label = 0;
        this.count_temp = 0;
    }

    public getLabelCurrent():string{
        let newLabel = "L" + this.count_label;
        this.count_label++;
        return newLabel;
    }

    public getTempCurrent():string{
        let newTemp = "t" + this.count_temp;
        this.count_temp++;
        return newTemp;
    }

    
}