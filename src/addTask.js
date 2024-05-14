function definirPrioridade(prioridade) {
    switch (prioridade) {
        case 1:
            return 'mamão com açúcar';
        case 2:
            return '20 min por dia';
        case 3:
            return 'Faço em menos de 50 minutos por dia!';
        case 4:
            return 'Faço em cerca de 60 minutos por dia!';
        case 5:
            return 'Faço em cerca de 1 hora 40 minutos por dia!';
        case 6:
            return 'Faço em cerca de 2 Pomodoro por dia!';
        default:
            return 'ErroR';
    }
}

// Função para obter a data atual
function obterDataAtual() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    return { dia, mes, ano };
}

// Função principal para criar a tarefa
export default function criarTarefa(nome, descricao, prioridade, prazo, check) {
    const tarefa = {
        nome: nome,
        descricao: descricao,
    };
    const prioridadeDescricao = definirPrioridade(prioridade);
    const dataAtual = obterDataAtual();
    const prazoTarefa = prazo;
    const checkTarefa = check === 1;

    return { tarefa, prioridade: prioridadeDescricao, dataAtual, prazo: prazoTarefa, check: checkTarefa };
}

// Exemplo de uso
// const tarefa = criarTarefa('cabar', 'quero acabar este projeto dando o melhor de mim', 1, 5, 0);
// console.log(tarefa);

// const crieProgresso;
// const crieCheck;

// const crieDelet;
// const crieAdicionar;
// const crieStart;