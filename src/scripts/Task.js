// models/Task.js
export default class Task {
  constructor(title, descricao, level, startDate, endDate, isChecked) {
    this.title = title;
    this.descricao = descricao;
    this.level = level;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isChecked = isChecked;
  }

  get() {
    return `${this.title},
            ${this.descricao},
            ${this.level},
            ${this.startDate},
            ${this.endDate}, 
            ${this.isChecked} `;
  }
}