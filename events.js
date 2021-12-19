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