const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const tablecontainer = document.querySelector('.wrapper');

const CABECALHO = ["id", "Nome", "Preço", "Categoria",];

let produtos = []

window.addEventListener('load', function () {
    criarTabela();
    criarCabecalho();
    carregarDados();
});

function carregarDados() {

    fetch("data/produtos.json")
        .then(function (resposta) { return resposta.json(); })
        .then(function (dados) {

            atualizarLinhas(dados);

        }).catch(function (erro) {
            console.error('Não foi possível carregar o arquivo: ' + erro.menssage);
        })

}//Fim do método carregarDados

function atualizarLinhas(dados) {
    for (let i = 0; i < dados.length; i++) {

        let linha = tbody.insertRow();
        linha.setAttribute('id', 'produto-' + dados[i].id)

        let registro = [
            dados[i].id,
            dados[i].title,
            dados[i].price,
            dados[i].category,
        ];

        for (let j = 0; j < registro.length; i++) {

            let celula = linha.insertCell();

            celula.innerText = registro[j]; 
            celula.setAttribute('title', registro[j]);
            linha.appendChild(celula);

        }

    }//Fim do for
}

function criarCabecalho() {

    let linha = thead.insertRow();

    for (let celula = 0; celula < CABECALHO.length; celula++) {

        let th = document.createElement('th');
        th.textContent = CABECALHO[celula];
        linha.appendChild(th);

    }// Fim for celula = 0

}//Fim do método criarCabecalho

function criarTabela() {

    thead.setAttribute('id', 'cabeçalho-tabela')
    tbody.setAttribute('id', 'cabeçalho-tabela')
    table.appendChild(thead);
    table.appendChild(tbody);

    tablecontainer.appendChild(table);

}//Fim do método de criar tabela