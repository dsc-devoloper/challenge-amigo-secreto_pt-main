//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let adicionar = document.querySelector("input").value.trim(); // Remove espaços extras

    if (adicionar !== "") { // Verifica se o campo não está vazio
        listaAmigos.push(adicionar); // Adiciona o nome ao início do array
    } else{
        alert ("Por favor, insira um nome.");
    }

    limparCampo();
    console.log(listaAmigos);
}
adicionarAmigo()

function limparCampo() {
    adicionar = document.querySelector('input');
    adicionar.value = '';
}

function atualizarListaAmigos() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    // Percorre o array de amigos e adiciona cada nome como um <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaHTML.appendChild(li);
    }
}
atualizarListaAmigos();

