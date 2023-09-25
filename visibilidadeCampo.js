// Função para Controlar a visibilidade dos Campos //

function controlarCampos() {
    var select = document.getElementById("equipSelect");
    var equipamento = document.getElementById("equipamento");
    var valorEstimado = document.getElementById("valorEstimado");
    
    if (select.value === "sim") {
        equipamento.style.display = "block"; // Mostra o campo Equipamento Solicitado
        valorEstimado.style.display = "block"; // Mostra o campo Valor Estimado
    } else {
        equipamento.style.display = "none"; // Oculta o campo Equipamento Solicitado
        valorEstimado.style.display = "none"; // Oculta o campo Valor Estimado
    }
}


  // html 

  // <div class="form-group row" id="equip">
  <div class="col-md-3">
  <label for="equip">Precisa Comprar Equipamentos?</label>
  <span class="required text-danger">
      <strong>*</strong>
  </span>
  <div>
  <select name="equip" id="equipSelect">
      <option value="nao">Não</option>
      <option value="sim">Sim</option>
  </select>
  </div>
</div>
</div>



<div class="form-group row" id="equipamento">
  <div class="col-md-2">
      <label for="equipamento">Equipamento Solicitado</label>
      <input class="form-control" type="text" name="equipamento">
  </div>
  
      <div class="col-md-4" id="valorEstimado">
      <label for="valorEstimado">Valor Estimado</label>
      <div>
      R$ <input name="valorEstimado" onkeyup="k(this);" /><br/>
      </div>
  </div>  //


   

                           