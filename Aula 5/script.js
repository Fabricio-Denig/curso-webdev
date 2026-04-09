// // // function saudacao(nome) {
// // //   return `Olá, ${nome}!`;
// // // }

// // // console.log(saudacao("Lucas")); // Saída: Olá, Lucas!


// //Hoisting:

// // A função "saudar" é declarada e sofre hoisting.
//  function saudar(nome) {
//   // Retorna uma mensagem personalizada
//   return `Olá, ${nome}! Bem-vindo ao TaskMaster.`;
// }

// const mensagem = saudar("Maria");
// console.log(mensagem); // Saída: Olá, Maria! Bem-vindo ao TaskMaster.   


// Variável declarada com var é hoisted e inicializada com undefined
// console.log(xVar); // Saída: undefined
// var xVar = 10;

// Variável declarada com let é hoisted, mas não inicializada (zona morta)
// console.log(xLet); // Erro: Cannot access 'xLet' before initialization
// let xLet = 20;


// Função que exibe detalhes de uma tarefa
// function exibirTarefa(id, titulo, prioridade) {
//   console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
// }
// exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
// function criarTarefa(titulo, descricao = "Sem descrição", 
//                      prioridade = "média", concluida = false) {
//   return {
//     id: Date.now(), // Gera um ID único com base no timestamp
//     titulo,
//     descricao,
//     prioridade,
//     concluida,
//     criada: new Date()
//   };
// }

// const tarefa = criarTarefa("Estudar funções");
// console.log(tarefa);


// Função que calcula estatísticas básicas de um array de números
// function calcularEstatisticas(numeros) {
//   let soma = 0;
//   let min = numeros[0];
//   let max = numeros[0];
  
//   // Itera pelo array para acumular a soma e atualizar os valores de min e max
//   for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
//     if (numeros[i] < min) {    //tudo que estiver dentro do [] é o local dele dentro do array, ex: se ta 0, é o primeiro valor de la de dentro
//       min = numeros[i];
//     }
//     if (numeros[i] > max) {
//       max = numeros[i];
//     }
//   }
  
//   const media = soma / numeros.length;
  
//   // Retorna os resultados em um objeto
//   return { soma, media, min, max, numeros, quantidade: numeros.length}; //pra uma pessoa saber como o código chegou nisso 
// }

// const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
// console.log(resultados);


// Função para formatar uma data no formato "DD/MM/AAAA"
// function formatarData(data, formato = 'curto') {
//   // Converte para objeto Date, se necessário
//   if (!(data instanceof Date)) {
//     data = new Date(data);
//   }
//   // Verifica se a data é válida
//   if (isNaN(data.getTime())) {
//     return "Data inválida";
//   }
//   const dia = data.getDate().toString().padStart(2, '0');
//   const mes = (data.getMonth() + 1).toString().padStart(2, '0'); //o + 1 é pq tbm é um array, ent janeiro é o 0, nao o 1
//   const ano = data.getFullYear();
  
//   if (formato === 'curto') {
//     return `${dia}/${mes}/${ano}`;
//   }
//   // Outros formatos podem ser implementados aqui...
//   return `${dia}/${mes}/${ano}`;
// }
// console.log("Data formatada:", formatarData(new Date()));

// Arrow function que retorna a subtração de dois números
// const subtrair = (a, b) => a - b;
// console.log("Subtração:", subtrair(20, 5));

