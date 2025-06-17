// AULA 11 - 12 DE MAIO DE 2025 - Segunda-Feira

// OBJETOS

//********************************* TEMA DA AULA **********************************
// 03 caracteristicas do objeto:  TER / FAZER / ESTAR

let serie = {
  nome: "High School Musical",
  dataLancamento: 2007,
  atores: ["Zac Efron", "Client Eastwood", "Arthur Morgan"],
  status: "finalizada",
  classificacao: 18,
  numTemporadas: {
    temp1: 12,
    temp2: 1,
    temp3: 0,
  },

  mostrarCaracteristicas: function () {
    return `O nome da série é: ${this.nome} a classificação é para maiores de ${this.classificacao} anos e ela esta ${this.status}.`;
  },
};

// console.log(serie.mostrarCaracteristicas());

// ---

let livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  ano: 1925,

  mostrarCaracteristicas: function () {
    return `O nome do livro é: ${this.titulo}, foi lançado em ${this.ano} e quem escreveu foi ${this.autor}.`;
  },
};

// console.log(livro.mostrarCaracteristicas());

// ---

let atleta = {
  nome: "CR7 - Flávio Caça Rato",
  time: "Caxias",
  esporte: "Futebol",
  melhorAmigo: "Ribagol",

  celebrarVitoria: function () {
    console.log("SIIIIIII");
  },
};

// console.log(atleta.celebrarVitoria());

//********************************* FOR IN / FOR OF / FOR EACH **********************************

// --- Desafio Proposto

// let professor = {
//   nome: "Stark",
//   disciplina: "Física",
//   notas: {
//     aluno1: [2, 5],
//     aluno2: [3, 2],
//   },
// };

// let somaNotas = 0;
// let numeroEstudates = 0;

// for (let estudante in professor.notas) {
//   somaNotas += professor.notas[estudante]
//     ? professor.notas[estudante].reduce((acc, nota) => acc + nota, 0) /
//       professor.notas[estudante].length
//     : professor.notas[estudante];

//   numeroEstudates++;
// }

// let media = somaNotas / numeroEstudates;
// console.log(`A nota média da turma é ${media}`);

// if (media >= 3) {
//   console.log(`${professor.nome} está acima da média`);
// } else {
//   console.log(`${professor.nome} está abaixo da média.`);
// }

// REVISAO / Continuar 57 minutos ...

let personagens = [{ nome: "killua" }, "minato", "aiorous"];

// console.log(personagens);

for (let key in personagens) {
  // console.log(personagens[key]);
}

let pessoa = "Nando";

for (let personagem of personagens) {
  // console.log(personagem);
}

// ----

let professor = {
  nome: "Luis",
  disciplina: "Matemática",
  notas: {
    aluno1: [2, 5],
    aluno2: [3, 2],
  },
};

let somaNotas = 0;
let numeroEstudantes = 0;

for (let estudante in professor.notas) {
  somaNotas += professor.notas[estudante]
    ? professor.notas[estudante].reduce((acc, nota) => acc + nota, 0) /
      professor.notas[estudante].length
    : professor.notas[estudante];
  numeroEstudantes++;
}

let media = somaNotas / numeroEstudantes;
console.log();
console.log(`A nota média da turma é: ${media}`);
console.log();
if (media >= 3) {
  console.log(`O professor ${professor.nome} está acima da média.`);
} else {
  console.log(`O Professor ${professor.nome} não está acima da média.`);
}
console.log();
