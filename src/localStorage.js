// localStorage.js

export function gravarTarefas(task) {
  const tasks = JSON.parse(localStorage.getItem("Tarefas")) || [];
  tasks.push(task);
  localStorage.setItem("Tarefas", JSON.stringify(tasks));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem("Tarefas")) || [];
}

export function deletarTarefasPeloIndex(index) {
  const tasks = JSON.parse(localStorage.getItem("Tarefas")) || [];
  const updatedTasks = tasks.filter((task, i) => i !== index);
  localStorage.setItem("Tarefas", JSON.stringify(updatedTasks));
  console.log("Tarefa removida com sucesso");
}

export function renderTasks(tasks) {
  return tasks
    .map((task, index) => {
      const color = pegarCorPerNivel(task.level);
      return `
        <details class="task" data-index="${index}" style="background-color: ${color}">
          <summary>
            ${task.title}
            <span>${task.endDate}</span>
            <button class="delete" data-index="${index}">Delete</button>
          </summary>
          <div>
            <h2 class="title">${task.title}</h2>
            <p><span>Descrição:</span> ${task.descricao}</p>
            <p><span>Nível:</span> ${task.level}</p>
            <p><span>Data de Início:</span> ${task.startDate}</p>
            <p><span>Data de Fim:</span> ${task.endDate}</p>
          </div>
        </details>
      `;
    })
    .join("");
}

function pegarCorPerNivel(level) {
  switch (level) {
    case "1":
      return "#d4edda"; // Verde claro
    case "2":
      return "#c3e6cb"; // Verde médio
    case "3":
      return "#ffeeba"; // Amarelo
    case "4":
      return "#f5c6cb"; // Vermelho claro
    default:
      return "#f8d7da"; // Vermelho escuro (erro)
  }
}
