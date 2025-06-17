//recursividade

function soma(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + soma(n - 1);
  }
}
console.log(soma(4));

/* eletronicos 
      celulares 
      computadores 
          notebooks
   roupas
*/

const categorias = [
  {
    id: 1,
    nome: "Eletrônicos",
    filhos: [
      { id: 2, nome: "Celulares", filhos: [] },
      {
        id: 3,
        nome: "Computadores",
        filhos: [{ id: 4, nome: "Notebooks", filhos: [] }],
      },
    ],
  },
  {
    id: 5,
    nome: "Roupas",
    filhos: [],
  },
];

function imprimirCategorias(lista, nivel = 0) {
  for (let categoria of lista) {
    console.log(" ".repeat(nivel * 2) + categoria.nome);
    if (categoria.filhos.length > 0) {
      imprimirCategorias(categoria.filhos, nivel + 1);
    }
  }
}

imprimirCategorias(categorias);
