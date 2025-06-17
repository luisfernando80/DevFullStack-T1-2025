// AULA 12 - 13 DE MAIO DE 2025 - Terça-Feira

// PRATICAR OBJETOS

//********************************* TEMA DA AULA **********************************

// const numeros = [10, 20, 30, 40, 50];

// for (chave in numeros) {
//   console.log(chave);
// }

// for (valor of numeros) {
//   console.log(valor);
// }

// EXERCICIO PARA PRATICAR OBJETOS - Verificar dentro de uma lista de livros os que foram publicados antes de 2000. Utilizar - For Of

// const livraria = [
//   { titulo: "Código Limpo", autor: "Martin", ano: 2019 },
//   { titulo: "The Gunslinger", autor: "Stephen King", ano: 1991 },
//   { titulo: "Laranja Mecânica", autor: "Nicole", ano: 1810 },
//   { titulo: "Pequeno Príncipe", autor: "Fabiana", ano: 1903 },
//   { titulo: "As Crônicas Marciana", autor: "Bradbury", ano: 2010 },
// ];

// for (livro of livraria) {
//   if (livro.ano < 2000) {
//     console.log(livro);
//   }
// }

// EXERCICIO PARA PRATICAR OBJETOS - Contar a quantidade de filmes por gênero [FOR EACH]

// let filmes = [
//   { titulo: "Senhor dos Anéis", genero: "Fantasia" },
//   { titulo: "Jogo da Imitação", genero: "Histórico" },
//   { titulo: "Clube da Luta", genero: "Drama" },
//   { titulo: "Ilha do Medo", genero: "Terror" },
//   { titulo: "Pulp Fiction", genero: "Ação" },
//   { titulo: "Poderoso Chefão", genero: "Máfia" },
//   { titulo: "DVD do Renight - Melhores Momentos", genero: "Histórico" },
//   { titulo: "Aí, que vida!", genero: "Comédia" },
//   { titulo: "Kill Bill", genero: "Ação" },
//   { titulo: "Batman Forever", genero: "Herói" },
//   { titulo: "Batman - Piada Mortal", genero: "Herói" },
//   { titulo: "As Branquelas", genero: "Comédia" },
//   { titulo: "Terno de 1 Bilhão de Dólares", genero: "Comédia" },
// ];

// let contagemGenero = {};

// filmes.forEach((filmes) => {
//   if (contagemGenero[filmes.genero]) {
//     contagemGenero[filmes.genero]++;
//   } else {
//     contagemGenero[filmes.genero] = 1;
//   }
// });

// console.table(contagemGenero);

// EXERCICIO PARA PRATICAR - Calcular o fatorial de um número.

// function calcularFatorial(numero) {
//   let fatorial = 1;
//   for (let i = 1; i <= numero; i++) {
//     fatorial *= i;
//   }
//   console.log(fatorial);
// }

// calcularFatorial(5);

// EXERCICIO PARA PRATICAR - Imprima os 10 primeiros números da sequencia da Fibonacci.

function fibonacci() {
  let a = 0,
    b = 1,
    temp;
  console.log(a);
  console.log(b);

  for (let i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}

// fibonacci();

// EXERCICIO PARA PRATICAR -

const livraria = [
  { titulo: "Código Limpo", autor: "Martin", ano: 2019 },
  { titulo: "The Gunslinger", autor: "Stephen King", ano: 1991 },
  { titulo: "Laranja Mecânica", autor: "Nicole", ano: 1810 },
  { titulo: "Pequeno Príncipe", autor: "Fabiana", ano: 1903 },
  { titulo: "As Crônicas Marciana", autor: "Bradbury", ano: 2010 },
];

let qtdLivros = 0;

// for (let year of livraria) {
//   if (year.ano < 2000) {
//     console.log(year);
//     qtdLivros++;
//   }
// }
// console.log();
// console.log(
//   `Total de Livros publicados antes do ano de 2000: ${qtdLivros} livros.`
// );

// ------

let filmes = [
  { titulo: "Senhor dos Anéis", genero: "Fantasia" },
  { titulo: "Jogo da Imitação", genero: "Histórico" },
  { titulo: "Clube da Luta", genero: "Drama" },
  { titulo: "Ilha do Medo", genero: "Terror" },
  { titulo: "Pulp Fiction", genero: "Ação" },
  { titulo: "Poderoso Chefão", genero: "Máfia" },
  { titulo: "DVD do Renight - Melhores Momentos", genero: "Histórico" },
  { titulo: "Aí, que vida!", genero: "Comédia" },
  { titulo: "Kill Bill", genero: "Ação" },
  { titulo: "Batman Forever", genero: "Herói" },
  { titulo: "Batman - Piada Mortal", genero: "Herói" },
  { titulo: "As Branquelas", genero: "Comédia" },
  { titulo: "Terno de 1 Bilhão de Dólares", genero: "Comédia" },
];

// let contagemGenero = {};

// filmes.forEach((filme) => {
//   if (contagemGenero[filme.genero]) {
//     contagemGenero[filme.genero]++;
//   } else {
//     contagemGenero[filme.genero] = 1;
//   }
// });

// console.table(contagemGenero);

// --fatorial de um numero----

function calcularFatorial(num) {
  let fatorial = 1;
  for (let i = 1; i <= num; i++) {
    fatorial = fatorial * i;
  }
  console.log(fatorial);
}

// calcularFatorial(5);

// ------- 10 primeiros numeros da sequencia de Fibonacci
function fibonacci() {
  let a = 0,
    b = 1,
    temp;
  console.log(a);
  console.log(b);
  for (let i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}
fibonacci();

//listas encadeadas
