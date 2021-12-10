abstract class NodeData{
    private functionType: number;
    private name: number;
    private returnType: number;
    private token: number;
    private variableType: number;

    constructor(functionType: number, name: number, returnType: number, token: number, variableType: number){
        this.functionType = functionType;
        this.name = name;
        this.returnType = returnType;
        this.token = token;
        this.variableType = variableType;
    }
}