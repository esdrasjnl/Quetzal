class Do_While extends Node_{
    public environment: Environment;

    constructor(name: number, value: number, line: number, column: number, children: Array<Node_>){
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        this.environment.previous = env;
        var condition = this.children[1];

        do{
            this.children[0].children.forEach(child => {
                child.run(env);
            });
        }
        while (condition.run(env));
    }

    translate(): string {
        return "";
    }

    generateSymbol(env: SymbolTableTraduction): void {
        if (this.children.length > 1) {
            this.children[0].children.forEach(child => {
              if(child instanceof Declaration){
                child.name_env = this.name_env + "_DoWhile";
                child.generateSymbol(env);
              }
              else if(child instanceof If){
                child.name_env = this.name_env + "_DoWhile";
                child.generateSymbol(env);
              }
              else if(child instanceof Else){
                child.name_env = this.name_env + "_DoWhile";
                child.generateSymbol(env);
              }
              else if(child instanceof While){
                child.name_env = this.name_env + "_DoWhile";
                child.generateSymbol(env);
              }
              else if(child instanceof Do_While){
                child.name_env = this.name_env + "_DoWhile";
                child.generateSymbol(env);
              }
            });
          }
    }

    
}