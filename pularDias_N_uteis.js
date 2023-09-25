/* Função para Pular os Dias não Úteis e linkar com os Campos Atribuidos */

var tipoServicoSelect = document.getElementById("tipoServico");
var tipoCatInput = document.getElementById("tipoCat");
var tipoSLAInput = document.getElementById("tipoSLA");
var tipoDataSomadaInput = document.getElementById("tipoDataSomada");

// Define um array com os números dos dias não úteis (domingo e sábado)
var diasNaoUteis = [0, 6]; // Domingo e Sábado

// Adiciona um ouvinte de evento para o elemento "tipoServicoSelect" que reage a mudanças (seleção diferente)
tipoServicoSelect.addEventListener("change", function () {
    // Obtém o valor selecionado no elemento "tipoServicoSelect"
    var selectedServico = tipoServicoSelect.value;

    // Obtém um conjunto de dados (dataset) chamado "dsSuporte"
    var dataset = DatasetFactory.getDataset("dsSuporte", null, null, null);

    // Loop que itera sobre os valores do dataset
    for (var i = 0; i < dataset.values.length; i++) {
        // Obtém a linha atual do dataset
        var row = dataset.values[i];

        // Verifica se a coluna "Servico" na linha atual corresponde ao serviço selecionado
        if (row.Servico === selectedServico) {
            // Converte a string da coluna "SLA" em um número inteiro
            var hora = parseInt(row["SLA"]);

            // Cria um novo objeto Date representando a data e hora atuais
            var dataAtual = new Date();

            // Inicializa uma variável para rastrear a quantidade de dias úteis adicionados
            var diasAdicionados = 0;

            // Loop que adiciona os dias úteis necessários
            while (diasAdicionados < hora) {
                // Adiciona um dia à data atual
                dataAtual.setDate(dataAtual.getDate() + 1);

                // Obtém o dia da semana da data atual (0 para domingo, 1 para segunda, etc.)
                var diaDaSemana = dataAtual.getDay();

                // Verifica se o dia da semana é não útil (domingo ou sábado)
                if (diasNaoUteis.includes(diaDaSemana)) {
                    continue; // Pula os dias não úteis
                }

                diasAdicionados++; // Incrementa a contagem de dias úteis adicionados
            }

            // Define o valor do elemento "tipoSLAInput" como a quantidade de horas (SLA)
            tipoSLAInput.value = hora;

            // Define o valor do elemento "tipoCatInput" como a categoria correspondente
            tipoCatInput.value = row["Categoria"];

            // Formata a data atual em uma string no formato "yyyy-MM-dd HH:mm"
            var dia = String(dataAtual.getDate()).padStart(2, "0");
            var mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
            var ano = dataAtual.getFullYear();
            var hora = String(dataAtual.getHours()).padStart(2, "0");
            var minuto = String(dataAtual.getMinutes()).padStart(2, "0");

            var dataFormatada = ano + "-" + mes + "-" + dia + " " + hora + ":" + minuto;

            // Define o valor do elemento "tipoDataSomadaInput" como a data formatada
            tipoDataSomadaInput.value = dataFormatada;

            break; // Sai do loop, pois encontramos a correspondência necessária
        }
    }
});
