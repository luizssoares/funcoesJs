// Formata a data para Puxar Prazo para o Fluig //

const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2,'0')
const mes = String(hoje.getMonth() + 1).padStart(2,'0')
const ano = hoje.getFullYear()
const dataAtual = `${dia} / ${mes} / ${ano}`

/* pick date userCurrent são para puxar a data atual e para bloquear o campo da Data;  */

<script type="text/javascript">
		var calendariodataAval = FLUIGC.calendar('#dataAval', {
			pickDate: false,
			useCurrent: true,
		});	
	</script>

/* Puxar a data e Bloquear a data numa Tabela */

<script>
        // Função para atualizar a célula com a data e hora atuais
        function atualizarDataHoraAtual() {
            const dataHoraAtual = new Date();
            const formatoDataHora = dataHoraAtual.toLocaleString();
            document.getElementById('dataHoraAtual').textContent = formatoDataHora;
        }

        // Chame a função para atualizar inicialmente e, em seguida, a cada segundo
        atualizarDataHoraAtual();
        /* setInterval(atualizarDataHoraAtual, 1000); // Atualiza a cada 1 segundo */
    </script>