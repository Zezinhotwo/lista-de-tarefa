//dateUtils.js
import { format, subDays, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getTasks } from "./localStorage.js"; // Corrigido o caminho

export function filtraTarefaPelaData(option) {
  const tasks = getTasks();
  const diaAtual = format(new Date(), "EEEE dd/MM/yyyy", { locale: ptBR });
  const diaOntem = format(subDays(new Date(), 1), "EEEE dd/MM/yyyy", { locale: ptBR });

  if (option === "Hoje") {
    return tasks.filter(task => task.startDate === diaAtual);
  } else if (option === "Ontem") {
    return tasks.filter(task => task.startDate === diaOntem);
  } else {
    return tasks;
  }
}