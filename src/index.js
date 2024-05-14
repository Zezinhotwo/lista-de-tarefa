import _ from 'lodash';
import './style.css';
import criarTarefa from './addTask.js';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello')
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Criar a tarefa
    const tarefa = criarTarefa('cabar', 'quero acabar este projeto dando o melhor de mim', 3, 5, 0);

    // Definir o texto interno do elemento com base nas informações da tarefa
    // element.innerText = `
    element.innerHTML = `
    <p><span>Nome:</span> ${tarefa.tarefa.nome}</p>
    <p><span>Descrição:</span> ${tarefa.tarefa.descricao}</p>
    <p><span>Dificuldade:</span> ${tarefa.prioridade}</p>
    <p><span>Data Atual Da Criação:</span> ${tarefa.dataAtual.dia}/${tarefa.dataAtual.mes}/${tarefa.dataAtual.ano}</p>
    <p><span>Prazo:</span> ${tarefa.prazo}</p>
    <p><span>Check:</span> ${tarefa.check ? 'Concluído' : 'Não concluído'}</p>
`;
return element;
}
document.body.appendChild(component());