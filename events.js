var config, editor;
var result,

config = {
    lineNumbers: true,
    mode: "text/html",
    theme: "ambiance",
    indentWithTabs: false,
    readOnly: false,
    mode: "xml",
    autoCloseBrackets: true
};

editor = CodeMirror.fromTextArea(document.getElementById("entrada"), config);

function analizaQuetAsc() {
    try {
        console.log("Ascendente");
        document.getElementById("console").value = "";
        result = grammar.parse(editor.getValue());
        console.log(result);
    } catch (error) {
        console.error(error.value);
    }
}

function analizaXMLDesc() {
  try {
      console.log("Descendente");
      document.getElementById("console").value = "";
      result = XmlDesc.parse(editor.getValue());
      console.log(result);
  } catch (error) {
      
  }
}

function reporteAstAsc(){
    let arbol = new AST();
    let graficar = arbol.generarDot(result);
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

function reporteAstDesc(){
  let arbol = new AST();
  let graficar = arbol.generarDot(result);
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