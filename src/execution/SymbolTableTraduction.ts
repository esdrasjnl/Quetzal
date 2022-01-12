class SymbolTableTraduction{
    public name: string;
    public map: Map<string, SymbolTraduction>;
    public isGlobal: boolean;

    constructor(name:string, isGlobal:boolean){
        this.name = name;
        this.map = new Map();
        this.isGlobal = isGlobal;
    }
}