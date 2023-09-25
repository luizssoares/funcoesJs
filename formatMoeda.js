// "Esta função melhora a apresentação do valor inserido."

  // .js //
function k(i) {
    var v = i.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    i.value = v;
}

  // .html //

  
/*<label>Testando:</label>
Valor R$ <input name="asd" onkeyup="k(this);" /><br/>*/
