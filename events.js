var config, editor;
var result,

config = {
    lineNumbers: true,
    mode: "text/html",
    theme: "ambiance",
    indentWithTabs: false,
    readOnly: false,
    mode: "javascript",
    autoCloseBrackets: true
};

let root;

editor = CodeMirror.fromTextArea(document.getElementById("entrada"), config);

function run() {
  try {
      Exception.exceptionList = [];
      console.log("Corriendo...!");
      document.getElementById("console").value = "";
      global = new Environment(null);
      root = grammar.parse(editor.getValue());

      Exception.print();
      
      if (root.children.length > 0) {
        root.children.forEach(child => {
          if (child  != ';') {
            child.run(global);
            console.log("Exitoso...!");
          }
        });
      }      
  } catch (error) {
    
  }
}

function traslate(){
  document.getElementById("result").value = '';
  let header = '#include <stdio.h>\n';
  let instructions = '';
  header += 'float heap[16384];\n';
  header += 'float stack[16394];\n';
  header += 'float p;\n';
  header += 'float h;\n';
  header += 'float t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;\n';
  header += 'int main() {\n';
  header += instructions;
  header += '\n'
  header += 'return 0;\n';
  header += '}'
  let root;
  //alert('holaa');
  let tmpEnv = new SymbolTableTraduction("Global", true);
  let count = 1;
  root = grammar.parse(editor.getValue());
  code_generator.getInstance().count_label = 0;
  code_generator.getInstance().count_temp = 0;
  code_generator.getInstance().count_varGlobal = 0;
  code_generator.getInstance().count_varLocal = 0;

  if (root.children.length > 0) {
    root.children.forEach(child => {
      if(child instanceof Declaration){
        child.name_env = "Global";
        child.generateSymbol(tmpEnv);
      }
      else if(child instanceof If){
        child.name_env = "Global";
        child.generateSymbol(tmpEnv);
      }
      else if(child instanceof While){
        child.name_env = "Global";
        child.generateSymbol(tmpEnv);
      }
      else if(child instanceof Do_While){
        child.name_env = "Global";
        child.generateSymbol(tmpEnv);
      }
    });
  }
  
  tmpEnv.map.forEach(element => {
    //console.log("Symbol "+ count + " " +element);
    console.log(element);
    count++;
  });

  console.log(header);
  document.getElementById("result").value = document.getElementById("result").value + header; 

}

function reportAST(){
    let objTree = new Tree();
    let graficar = objTree.generateDot(root);
    var clickedTab = document.getElementById("clickedTab");
    clickedTab.innerHTML = "";
    clickedTab.innerHTML = "<h3>Reporte AST</h3>"

    //console.log(graficar);
    var viz = new Viz();
    viz.renderSVGElement(graficar).then(function (element) {
      clickedTab.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });

}