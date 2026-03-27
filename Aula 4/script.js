// let a = 5, b = 10;

// console.log(a == b);   // false (igualdade)
// console.log(a === b);  // false (igualdade estrita)
// console.log(a != b);   // true (diferente)
// console.log(a !== b);  // true (diferente estrito)
// console.log(a < b);    // true (menor que)
// console.log(a > b);    // false (maior que)
// console.log(a <= b);   // true (menor ou igual)
// console.log(a >= b);   // false (maior ou igual)





// let idade = 25;
// let temCarteira = true;

// // AND (&&) - ambas condições devem ser verdadeiras
// if (idade >= 18 && temCarteira) {
//   console.log("Pode dirigir");
// }

// // OR (||) - pelo menos uma condição deve ser verdadeira
// if (idade < 18 || !temCarteira) {
//   console.log("Não pode dirigir");
// }

// // NOT (!) - inverte o valor booleano
// if (!temCarteira) {
//   console.log("Precisa de carteira");
// }



// let tarefaConcluida = true;

// if (tarefaConcluida) {
//   console.log("A tarefa está concluída!");
// }




// let prioridade = 2; // 1: baixa, 2: média, 3: alta

// if (prioridade === 3) {
//   console.log("Prioridade Alta");
// } else {
//   console.log("Prioridade não é alta");
// }







// if (prioridade === 1) {
//   console.log("Prioridade Baixa");
// } else if (prioridade === 2) {
//   console.log("Prioridade Média");
// } else if (prioridade === 3) {
//   console.log("Prioridade Alta");
// } else {
//   console.log("Prioridade desconhecida");
// }




// let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, etc.

// switch (diaSemana) {
//   case 0:
//     console.log("Domingo");
//     break;
//   case 1:
//     console.log("Segunda-feira");
//     break;
//   // ...
//   default:
//     console.log("Dia inválido");
//     break;
// }



// for (let i = 0; i < 5; i++) {
//   console.log("Contagem:", i);
// }
// let contador = 0;

// while (contador < 5) {
//   console.log("Contagem:", contador);
//   contador++;
// }

// let numero = 5;
// do {
//   console.log("Número é:", numero);
//   numero--;
// } while (numero > 0);


// Exercícios:
//Ex 1:
// let nivelAcesso = 3
// if (nivelAcesso === 3){
//     console.log("Acesso Total")
// }else if (nivelAcesso === 2){
//     console.log
// }else{
//     console.log("Acesso Negado")
// }

//Ex 2:

let nota = 9
switch (nota) {
    case 10:
        console.log("Nota Máxima!",nota);        
        break;
    case 9 && 8:
        console.log("Muito bom!",nota);
    case 7 && 6:
        console.log("Bom",nota);
    case 5:
        console.log("Regular",nota);
    default:
        console.log("Nota insuficiente")
        break;
}