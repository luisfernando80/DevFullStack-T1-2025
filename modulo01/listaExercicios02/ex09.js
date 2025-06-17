//  9. Conversão Entre Formatos

//  Escreva duas funções:

// -> Primeira Função: paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ]
// e retorna o objeto equivalente.

const arrayDeArray = [
  ["nome", "Luis"],
  ["idade", 44],
  ["cidade", "Arapiraca"],
];

function paresParaObjeto(pares) {
  const objetoEquivalente = Object.fromEntries(pares);
  return objetoEquivalente;
}

console.log(paresParaObjeto(arrayDeArray));

// -> Segunda Função: objetoParaPares(obj) faz o inverso, retornando um array de pares.

const eletro = {
  descricao: "Fogão",
  preco: 890,
  marca: "Brastemp",
};

function objetoParaPares(obj) {
  const arrPares = Object.entries(obj);
  return arrPares;
}

console.log(objetoParaPares(eletro));
