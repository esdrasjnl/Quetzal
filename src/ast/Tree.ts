class Tree{
    private i: number;

    constructor(){
        this.i = 0;
    }

    public generateDot(root:Node_):string{
        var dotReport:string = "digraph Arbol_AST{ node[shape=\"box\"]";
        dotReport += this.dotTree(root);
        dotReport += "}";
        return dotReport;
    }

    public dotTree(root:Node_):string{

        var bodyFileTree:string = "";
        this.i++;
        var father:string = "n"+this.i;
        if (root != undefined) {
            if( root.getValue() != null )
                bodyFileTree += father + "[label = \"" + root.getName() + "\\n" + root.getValue() + "\"];";
            else
                bodyFileTree += father + "[label = \"" + root.getName() + "\"];";
            
            
            for(let objNode of root.getChildren()){
                if (objNode != undefined) {
                    bodyFileTree += father + " -> n" + (this.i + 1) + ";\n";
                    bodyFileTree += this.dotTree(objNode);
                }
            }
        }
        return bodyFileTree;

    }
}