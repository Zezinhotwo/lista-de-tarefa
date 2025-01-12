"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTasksHtml = generateTasksHtml;
function generateTasksHtml(tasks) {
    return tasks
        .map((task, index) => {
        const color = getLevel(task.level);
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
function getLevel(level) {
    switch (level) {
        case 1:
            return "#d4edda";
        case 2:
            return "#fff7a3";
        case 3:
            return "#ffaa75";
        case 4:
            return "#f5c6cb";
        default:
            return "#f8d7da";
    }
}
