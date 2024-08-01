// tasks.js

export function deleteTask(element) {
    const tasks = JSON.parse(localStorage.getItem("Tarefas")) || [];
    const updatedTasks = tasks.filter(
      (task) =>
        !(
          task.title === element.title &&
          task.descricao === element.descricao &&
          task.level === element.level &&
          task.InitiDate === element.InitiDate &&
          task.EndDate === element.EndDate
        )
    );
  
    if (tasks.length !== updatedTasks.length) {
      localStorage.setItem("Tarefas", JSON.stringify(updatedTasks));
      console.log("Tarefa removida com sucesso");
    } else {
      console.log("A tarefa não foi encontrada ou já foi removida");
    }
  
    console.log(updatedTasks);
  }
  
  export function salvaJSON(element) {
    const tasks = JSON.parse(localStorage.getItem("Tarefas")) || [];
    if (!exists(element, tasks)) {
      tasks.push(element);
      localStorage.setItem("Tarefas", JSON.stringify(tasks));
    }
  }
  
  function exists(element, tasks) {
    return tasks.some(
      (task) =>
        task.title === element.title &&
        task.descricao === element.descricao &&
        task.level === element.level &&
        task.InitiDate === element.InitiDate &&
        task.EndDate === element.EndDate
    );
  }
  
export function getJSON() {
  
    return JSON.parse(localStorage.getItem("Tarefas")) || [];
  }
  
  export function renderTasks(tasks) {
    return tasks
      .map((task) => {
        return `<details class="task">
        <summary>${task.title}</summary>
          <div>
              <h2 class="title">${task.title}</h2>
              <p><span>Descrição:</span> ${task.descricao}</p>
              <p><span>Nível:</span> ${task.level}</p>
              <p><span>Data de Início:</span> ${task.InitiDate}</p>
              <p><span>Data de Fim:</span> ${task.EndDate}</p>
          </div>
        </details>`;
      })
      .join("");
  }
  


