// Dentro de Events.. / util.js 
// Function and  displayfields

function injetarJQuery(customHTML) {
	customHTML.append('<script src="jquery.js"></script>');
}


function injetarInicioScript(customHTML, classCampo) {
	injetarInicioDocumentReady(customHTML);
	customHTML.append('$(".');
	customHTML.append(classCampo);
	injetarFimDocumentReady(customHTML);
}


function injetarInicioDocumentReady(customHTML) {
	customHTML.append('<script>');
	customHTML.append('$(function(){');
}

/*
 * Injetar o script do Jquery para ser finalizado ap?s a p?gina ser carregada
 * 
 * Params: customHTML
 */
function injetarFimDocumentReady(customHTML) {
	customHTML.append('")');
}

/*
 * Injeta Termino de Script de Function (javascript)
 * 
 * Params: customHTML
 */
function injetarTerminoScript(customHTML) {
	customHTML.append('});');
	customHTML.append('</script>');
}

/*
 * Oculta CLASS (jquery)
 * 
 * Params: customHTML, class
 */
function ocultarCampo(customHTML, classCampo) {
	injetarInicioScript(customHTML, classCampo);
	customHTML.append('.hide()');
	injetarTerminoScript(customHTML);
}
function aparecerCampo(customHTML, classCampo) {
	injetarInicioScript(customHTML, classCampo);
	customHTML.append('.show()');
	injetarTerminoScript(customHTML);
}

function naoHabilitarInput(customHTML, elem){
	customHTML.append("<script>");
	customHTML.append("$(function(){$(\"#");
	customHTML.append(elem);
	customHTML.append("\").prop(\"readonly\",true)});");
	customHTML.append("</script>");
}

function naoHabilitarSelect(customHTML, elem){
	customHTML.append("<script>");
	customHTML.append("$(function(){$(\"#");
	customHTML.append(elem);
	customHTML.append("\").prop(\"disabled\",true)});");
	customHTML.append("</script>");
}




// no displayfields : function displayFields(form,customHTML) {}

/// ocultarCampo(customHTML, "del...");  (Classe)



