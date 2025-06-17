// 15°) Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//      Fibonacci utilizando um loop for.

let n1 = 0;
let n2 = 1;
let n3;

console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
  n3 = n1 + n2;
  console.log(n3);
  n1 = n2;
  n2 = n3;
}
