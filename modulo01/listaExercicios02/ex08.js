//  8. Agrupamento por Propriedade

//    Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
//    cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Manuel", total: 5000 },
  { cliente: "José", total: 8400 },
  { cliente: "Maria", total: 6700 },
  { cliente: "Manuel", total: 1258 },
  { cliente: "Maria", total: 4356 },
  { cliente: "José", total: 3464 },
];

const agruparClientesTotal = vendas.reduce((acc, elementoAtual) => {
  if (acc[elementoAtual.cliente]) {
    acc[elementoAtual.cliente] += elementoAtual.total;
  } else {
    acc[elementoAtual.cliente] = elementoAtual.total;
  }
  return acc;
}, {});

console.log(agruparClientesTotal);
