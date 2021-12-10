class NodeData{
    private functionType: number;
    private returnType: number;
    private token: number;
    private variableType: number;

    constructor(functionType: number, returnType: number, token: number, variableType: number){
        this.functionType = functionType;
        this.returnType = returnType;
        this.token = token;
        this.variableType = variableType;
    }
}