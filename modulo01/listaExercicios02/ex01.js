//  1. Validação de Datas

//    Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//    formarem uma data real (meses de 28–31 dias, ano bissexto para
//    fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12 || dia < 1) return false;

  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

  let dias = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (bissexto) {
    dias[2] = 29;
  }

  if (dia > dias[mes]) {
    return false;
  }

  return true;
}

console.log(ehDataValida(12, 6, 2018));
