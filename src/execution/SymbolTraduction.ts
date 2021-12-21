class SymbolTraduction{
    public name: string;
    public size: number;
    public position: number;
    public isGlobal: boolean;
    public type: Type;

    constructor(name: string, size:number, position:number, isGlobal:boolean, type:Type){
        this.name = name;
        this.size = size;
        this.position = position;
        this.isGlobal = isGlobal;
        this.type = type;
    }

    

}