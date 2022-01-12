class Else extends Node_ {
    public environment: Environment;

    constructor (children: Array<Node_>) {
        super(NodeName.ELSE, "else", -1, -1, children, new NodeData(-1, -1, -1, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        this.environment.previous = env;

        this.children[0].children.forEach(child => {
            child.run(this.environment);
        });
    }

    translate(): string {
        return "";
    }

    generateSymbol(env: SymbolTableTraduction): void {
        if (this.children.length == 1) {
            //Se ejecuta el else
            this.children[0].children.forEach(child => {
                if(child instanceof Declaration){
                  child.name_env = this.name_env + "_Else";
                  child.generateSymbol(env);
                }
                else if(child instanceof If){
                  child.name_env = this.name_env + "_Else";
                  child.generateSymbol(env);
                }
                else if(child instanceof While){
                  child.name_env = this.name_env + "_Else";
                  child.generateSymbol(env);
                }
                else if(child instanceof Do_While){
                  child.name_env = this.name_env + "_Else";
                  child.generateSymbol(env);
                }
              });
        }
        else if (this.children.length > 1) {
            
          }
    }
}