class code_generator{
    public count_label: number;
    public count_temp: number;
    public count_varGlobal: number;
    public count_varLocal: number;
    private static ObjCodGen: code_generator = new code_generator();

    constructor(){
        this.count_label = 0;
        this.count_temp = 0;
        this.count_varGlobal = 0;
        this.count_varLocal = 0;
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

    public generatorString(temp:string, stringValue:string):string{
        let addString = "";
        addString += "\t" + temp + " = H;\n";
        addString += "\tH = H + 1;\n";

        if (stringValue.length == 0)
            {
                addString += "\theap[(int)" + (temp) + "] = 0;\n";
            }
            else
            {
                addString += "\theap[(int)" + (temp) + "] = " + stringValue.length + ";\n";
                //char[] arrayChar = stringAgregar.ToCharArray();
                let arrayChar = Array.from(stringValue);
                let i;

                for (i = 0; i < arrayChar.length; i++)
                {
                    let tempActual = this.getTempCurrent();
                    addString += "\t" + tempActual + " = H;\n";
                    addString += "\tHP = HP + 1;\n";
                    addString += "\theap[(int)" + tempActual + "] = " + arrayChar[i] + ";\n";
                }

            }

        return addString;
    }
    
}