// EXERCICIO - CONVERTER CELSIUS EM FAHENHEIT

let celsius = 32;

fahrenheit = (9 * celsius) / 5 + 32;

console.log(`Portanto, ${celsius}°C equivalem a ${fahrenheit}°F`);

//Escreva um algoritmo para ler o numero de eleitores de um municipio, o numero de votos brancos, nulos e validos. Calcular e escrever o percentual que cada um representa em relacao ao total de eleitores.

let totalEleitores = 200;
let votosBrancos = 10;
let votosNulos = 20;
let votosValidos = 160;

let percentualVotosBrancos = (votosBrancos / totalEleitores) * 100;
let percentualVotosNulos = (votosNulos / totalEleitores) * 100;
let percentualVotosValidos = (votosValidos / totalEleitores) * 100;

// console.log(
//   `O percentual de votos em branco, nulos e válidos é respectivamente ${percentualVotosBrancos}, ${percentualVotosNulos}, ${percentualVotosValidos}`
// );

//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.
//[Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)
//[Saída para os dados de entrada acima]
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunos reprovados na turma D)
//11.25 (percentual de alunos reprovados em relação ao total de alunos das duas

let totalAlunosC = 60;
let totalAlunosD = 20;

let percentualReprovadosTurmaC = 10;
let percentualAprovadosTurmaD = 85;

let quantidadeALunosReprovadosTurmaC = percentualReprovadosTurmaC;

//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.

let diaDaSemana = "Domingo";

// switch (diaDaSemana) {
//   case "Segunda":
//   case "Terça":
//   case "Quarta":
//   case "Quinta":
//   case "Sexta":
//     console.log("Dia Útil");
//     break;
//   case "Sábado":
//   case "Domingo":
//     console.log("Final de Semana");
//     break;
// }

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

// const prompt = require("prompt-sync")();

// let valor;

// do {
//   valor = Number(prompt("Inform um numero: "));

//   if (valor > 0) {
//     console.log("Posiotivo");
//   } else if (valor === 0) {
//     break;
//   } else {
//     console.log("NEgativo");
//   }
// } while (valor !== 0);

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.

const prompt = require("prompt-sync")();

let senha;

// do {
//   senha = Number(prompt("Informa a senha: "));
//   if (senha === 2807) {
//     console.log("Acesso Permitido!");
//     break;
//   } else {
//     console.log("Senha Incorreta!");
//   }
// } while (senha === 2807);
