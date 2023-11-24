// Bloquear ou Sumir com campos dinamicamente baseado na seleção de campos.

function BloquearCampos() {

    var ServicoSelect = document.getElementById("TipoServico");
    var MetricasSelect = document.getElementById("MetricasLabel");
    var ObjetivoSelect = document.getElementById("ObjetivoLabel");
    var PainelSelect = document.getElementById("painel_integra");
    var PainelAjuste = document.getElementById("painel_ajuste");

    
    if (ServicoSelect.value === "1") {
        ObjetivoSelect.disabled = false; // Habilita o campo Objetivo
        MetricasSelect.disabled = true; // Desabilita o campo Metricas
        ObjetivoSelect.style.display = "block"; //Mostra o Campo Objetivo
        MetricasSelect.style.display = "none"; //Esconde o Campo Metricas
        PainelSelect.style.display = "none";
        PainelAjuste.style.display = "block";

    } else if (ServicoSelect.value === "2") {
        ObjetivoSelect.disabled = true;
        MetricasSelect.disabled = false;
        ObjetivoSelect.style.display = "none";
        MetricasSelect.style.display = "block";
        PainelSelect.style.display = "block";
        PainelAjuste.style.display = "none";

    }  else if (ServicoSelect.value === ""){
        ObjetivoSelect.disabled = true; // Desabilita o campo Objetivo
        MetricasSelect.disabled = true; // Desabilita o campo Metricas
        ObjetivoSelect.style.display = "none";
        MetricasSelect.style.display = "none";
        PainelSelect.style.display = "none";
        PainelAjuste.style.display = "none";
    }
}

var ServicoSelect = document.getElementById("TipoServico");
ServicoSelect.addEventListener("change", BloquearCampos);
BloquearCampos();
