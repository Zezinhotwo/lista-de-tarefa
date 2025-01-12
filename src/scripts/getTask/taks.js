"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTasksHtml = generateTasksHtml;
function generateTasksHtml(tasks) {
    return tasks
        .map(function (task, index) {
        var color = getLevel(task.level);
        return "\n          <details class=\"task\" data-index=\"".concat(index, "\" style=\"background-color: ").concat(color, "\">\n            <summary>\n              ").concat(task.title, "\n              <span>").concat(task.endDate, "</span>\n              <button class=\"delete\" data-index=\"").concat(index, "\">Delete</button>\n            </summary>\n            <div>\n              <h2 class=\"title\">").concat(task.title, "</h2>\n              <p><span>Descri\u00E7\u00E3o:</span> ").concat(task.descricao, "</p>\n              <p><span>N\u00EDvel:</span> ").concat(task.level, "</p>\n              <p><span>Data de In\u00EDcio:</span> ").concat(task.startDate, "</p>\n              <p><span>Data de Fim:</span> ").concat(task.endDate, "</p>\n            </div>\n          </details>\n        ");
    })
        .join("");
}
function getLevel(level) {
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
