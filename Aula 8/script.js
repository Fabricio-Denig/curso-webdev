const titulo = document.querySelector("h1");

console.log(titulo);

titulo.textContent = "Novo Titulo";

const div = document.querySelector("#container");
console.log(div);
div.textContent =
  "<p>Parágrafo</p>"; /*Aqui ele vai só ser uma String, nn algo do html*/
div.innerHTML = "<p>Parágrafo</p>"; /*Agora sim*/

const image = document.querySelector("img");
image.setAttribute("src", "images/images.jpg");

const caixa = document.querySelector(".box");

caixa.style.width = "100px";
caixa.style.height = "100px";

caixa.style.backgroundColor = "lightGreen";

caixa.style.border = "10px solid black";

caixa.classList.add("oculto");
caixa.classList.remove("oculto");

const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
  caixa.classList.toggle(
    "oculto"
  ); /*se a clase existe, ele remove, caso navigador, ele adiciona*/
});

const novoItem = document.createElement("li");
novoItem.textContent = "Novo Item";
document.querySelector("ul").appendChild(novoItem);

/*novoItem.remove(); Apaga caso queira*/

localStorage.setItem("nome", "João"); /*Chave e valor, na sequencia*/
localStorage.setItem("nome2", "Daniel"); /*Chave e valor, na sequencia*/
localStorage.setItem("nome2", "Thiago"); /*Chave e valor, na sequencia*/

let nome = localStorage.getItem("nome");

console.log(nome);

/*localStorage.removeItem("nome2") Remove um deles caso queira*/
/*localStorage.clear Apaga todos*/

const usuario = { nome: "Daniel", idade: 36 };
//localStorage.setItem("usuario")/*Ele nn entende objetos completos, como esse*/
localStorage.setItem("usuario", JSON.stringify(usuario)); /*agr funciona*/

const recuperado = JSON.parse(localStorage.getItem(usuario));

console.log(recuperado);
console.log(recuperado.nome);
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const renderizarTarefas = () => {

  const lista = document.getElementById("lista-tarefas");

  lista.innerHTML = "";

  tarefas.forEach((t) => {

    const li = document.createElement("li");

    li.textContent = t;

    lista.appendChild(li);

  });

};



renderizarTarefas();



const addTarefa = () => {

  const input = document.getElementById("input-tarefa");

  tarefas.push(input.value);

  input.value = "";

};



document.getElementById("form-tarefa").onsubmit = (event) => {

  event.preventDefault();

  addTarefa();

};



const limparTarefas = () =>{

  tarefas = []

  localStorage.removeItem("tarefas")

  renderizarTarefas()

}



document.getElementById("btn-limpar").onclick = () => {

  limparTarefas()

}