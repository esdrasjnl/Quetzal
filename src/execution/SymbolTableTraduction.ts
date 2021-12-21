class SymbolTableTraduction{
    public name: string;
    public map: Map<string, SymbolTraduction>;

    constructor(name:string){
        this.name = name;
        this.map = new Map();
    }
}