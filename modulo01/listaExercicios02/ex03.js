//  3. Palavras Únicas

//    Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
//    todas as palavras únicas e exibi-las em um array.

const string = "olá olá mundo mundo";
const arr = string.split(" ");
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  let jaExiste = false;

  for (let j = 0; j < newArray.length; j++) {
    if (arr[i] === newArray[j]) {
      jaExiste = true;
      break;
    }
  }
  if (jaExiste) {
  } else newArray.push(arr[i]);
}

console.log(newArray);
