import { addDays, subDays, format, closestTo } from "date-fns";
import { ptBR } from "date-fns/locale";

// LIB
const diaAtual = new Date();
// ver a data atual mais proxima
console.log(
  format(
    closestTo(new Date(), [
      addDays(diaAtual, 1),
      addDays(diaAtual, 12),
      addDays(diaAtual, 12),
      addDays(diaAtual, 12),
      addDays(diaAtual, 12),
      addDays(diaAtual, 12),
    ]),
    " dd MMMM yyyy ",
    { locale: ptBR }
  )
);
console.log();
console.log();
console.log();
console.log();

// formatacao de datas
console.log(format(diaAtual, "BBBBB EEEE MM yyyy"));
console.log(diaAtual.toString());
// adicionar dias
console.log(addDays(diaAtual, 1).toString());
// remover dias
console.log(subDays(diaAtual, 1).toString());

