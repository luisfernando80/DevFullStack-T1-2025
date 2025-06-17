//  7. Mapeamento e Ordenação

//    Dado um array produtos = [{ nome, preco }, ...], crie uma função que
//    retorne um novo array apenas com os nomes, ordenados por preço
//    crescente, usando map, sort.

let produtos = [
  { nome: "TV", preco: 1500 },
  { nome: "Geladeira", preco: 2500 },
  { nome: "Mircroondas", preco: 849.9 },
  { nome: "Liquidificador", preco: 350 },
  { nome: "Fogao", preco: 899.99 },
];

const descricaoOrdemPreco = produtos
  .sort((a, b) => a.preco - b.preco)
  .map((descricao) => descricao.nome);

console.log(descricaoOrdemPreco);
