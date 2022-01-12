"use strict";
class Declaration extends Node_ {
    constructor(line, column, children) {
        super(NodeName.DECLARATION, "", line, column, children, new NodeData(-1, -1, -1, -1), false, false);
    }
    run(env) {
        var type = NodeReturnType.getType(String(this.children[0].value));
        if (this.children.length == 3) {
            var id = this.children[1].value;
            var value = this.children[2];
            var variable = new Variable(type, id, value);
            env === null || env === void 0 ? void 0 : env.putSymbol(id, variable);
        }
        else {
            this.children[1].children.forEach(child => {
                var id = child.value;
                var variable = new Variable(type, id, null);
                env === null || env === void 0 ? void 0 : env.putSymbol(id, variable);
            });
        }
    }
    translate() {
        return "";
    }
    generateSymbol(env) {
        if (this.children.length == 3) {
            var type = NodeReturnType.getType(String(this.children[0].value));
            var id = this.children[1].value;
            var id_aux = id + '_' + this.name_env;
            let getVar = env.map.get(id_aux);
            if (getVar != undefined) {
                alert("Error");
                return;
            }
            var symbol_traduction = new SymbolTraduction(id, -1, -1, false, new Type_Traduction(primitive.NA, rol.NA));
            if (env.isGlobal) {
                symbol_traduction.isGlobal = true;
                symbol_traduction.type.RolPrimitive = rol.VARIABLE_GLOBAL;
                symbol_traduction.position = code_generator.getInstance().count_varGlobal;
            }
            else {
                symbol_traduction.type.RolPrimitive = rol.VARIABLE_LOCAL;
                symbol_traduction.position = code_generator.getInstance().count_varLocal;
            }
            //Para tipos integer
            if (type == 1) {
                symbol_traduction.type.TypePrimitive = primitive.INTEGER;
                symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    code_generator.getInstance().count_varGlobal++;
                }
                else {
                    code_generator.getInstance().count_varLocal++;
                }
            }
            //Para tipos Double 
            else if (type == 2) {
                symbol_traduction.type.TypePrimitive = primitive.DOUBLE;
                symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    code_generator.getInstance().count_varGlobal++;
                }
                else {
                    code_generator.getInstance().count_varLocal++;
                }
            }
            //Para tipos boolean 
            else if (type == 3) {
                symbol_traduction.type.TypePrimitive = primitive.BOOLEAN;
                symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    code_generator.getInstance().count_varGlobal++;
                }
                else {
                    code_generator.getInstance().count_varLocal++;
                }
            }
            //Para tipos string
            else if (type == 4) {
                symbol_traduction.type.TypePrimitive = primitive.STRING;
                //symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    //code_generator.getInstance().count_varGlobal++;
                }
                else {
                    //code_generator.getInstance().count_varLocal++;
                }
            }
            //Para tipos char 
            else if (type == 5) {
                symbol_traduction.type.TypePrimitive = primitive.CHAR;
                symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    code_generator.getInstance().count_varGlobal++;
                }
                else {
                    code_generator.getInstance().count_varLocal++;
                }
            }
            //Para tipos struct 
            else if (type == 6) {
                symbol_traduction.type.TypePrimitive = primitive.STRUCT;
                //symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    //code_generator.getInstance().count_varGlobal++;
                }
                else {
                    //code_generator.getInstance().count_varLocal++;
                }
            }
            //Para tipos Array 
            else if (type == 7) {
                symbol_traduction.type.TypePrimitive = primitive.ARRAY;
                //symbol_traduction.size = 1;
                if (symbol_traduction.isGlobal) {
                    //code_generator.getInstance().count_varGlobal++;
                }
                else {
                    //code_generator.getInstance().count_varLocal++;
                }
            }
            env.map.set(id_aux, symbol_traduction);
        }
        else {
        }
    }
}
