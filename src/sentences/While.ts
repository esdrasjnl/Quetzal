class While extends Node_{
    public environment: Environment;

    constructor(name: number, value: number, line: number, column: number, children: Array<Node_>){
        super(name, value, line, column, children, new NodeData(-1, -1, NodeToken.INSTRUCTION, -1), false, false);
        this.environment = new Environment(null);
    }

    run(env: Environment | null) {
        this.environment.previous = env;
        var condition = this.children[0];

        while (condition.run(env)) {
            this.children[1].children.forEach(child => {
                child.run(env);
            });
        }
    }

    translate(): string {
        return "";
    }

    generateSymbol(env: SymbolTableTraduction): void {
        if (this.children.length > 1) {
            this.children[1].children.forEach(child => {
              if(child instanceof Declaration){
                child.name_env = this.name_env + "_While";
                child.generateSymbol(env);
              }
              else if(child instanceof If){
                child.name_env = this.name_env + "_While_If";
                child.generateSymbol(env);
              }
              else if(child instanceof Else){
                child.name_env = this.name_env + "_While_Else";
                child.generateSymbol(env);
              }
              else if(child instanceof While){
                child.name_env = this.name_env + "_While_While";
                child.generateSymbol(env);
              }
              else if(child instanceof Do_While){
                child.name_env = this.name_env + "_While_DoWhile";
                child.generateSymbol(env);
              }
            });
          }
    }
}