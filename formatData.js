// Formata a data para Puxar Prazo para o Fluig //

const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2,'0')
const mes = String(hoje.getMonth() + 1).padStart(2,'0')
const ano = hoje.getFullYear()
const dataAtual = `${dia} / ${mes} / ${ano}`