
export interface Task {
    title: string;
    descricao: string;
    level: number;
    startDate: string;
    endDate: string;
}

export function generateTasksHtml(tasks: Task[]): string {
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

function pegarCorPerNivel(level: number): string {
    switch (level) {
        case 1:
            return "#d4edda"; // Verde claro
        case 2:
            return "#fff7a3"; // Amarelo claro
        case 3:
            return "#ffaa75"; // Laranja claro
        case 4:
            return "#f5c6cb"; // Vermelho claro
        default:
            return "#f8d7da"; // Vermelho escuro (erro)
    }
}