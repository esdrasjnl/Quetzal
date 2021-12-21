enum primitive{
    INTEGER,DOUBLE,BOOLEAN,STRING,CHAR,STRUCT,ARRAY,ERROR,NA    
}

enum rol{
    VARIABLE_LOCAL,VARIABLE_GLOBAL,FUNCTION
}

class Type{
    public TypePrimitive: primitive;
    public RolPrimitive: rol;

    constructor(TypePrimirive:primitive, RolPrimirive:rol){
        this.TypePrimitive = TypePrimirive;
        this.RolPrimitive = RolPrimirive;
    }
}