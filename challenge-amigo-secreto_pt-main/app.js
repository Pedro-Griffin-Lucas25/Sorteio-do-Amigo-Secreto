let nomeDosAmigos = [];
let listaDeAmigos = document.querySelector('.friend');
let nomesApresentados = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let amigos = document.querySelector('input').value;

    if (parseInt(amigos)) {
        alert('Digite um valor valido!');
        limparCampo();
    } else if (!amigos) {
        alert('Por favor, digite um nome valido!')
        limparCampo();
    } else {
        nomeDosAmigos.push(amigos);
        mostrarListaDeAmigos();
        limparCampo();
    };

    resultado.innerHTML = '';
    console.log(nomeDosAmigos);

};

function mostrarListaDeAmigos() {
    novoAmigo = ''
    nomeDosAmigos.forEach((amigo) => {
        novoAmigo = novoAmigo + `
        <li>

            <p>${amigo}</p>

        </li>
        `;
    });

    nomesApresentados.innerHTML = novoAmigo;
    console.log(nomesApresentados);
};

function sortearAmigo() {
    let amigoSorteado = Math.floor(nomeDosAmigos.length * Math.random());
    let resultado = document.getElementById('resultado')

    if (nomeDosAmigos == '') {
        alert('Digite nomes validos para continuar!')
        amigoSorteado = ''
    } else {
        nomesApresentados.innerHTML = '';
        resultado.innerHTML = `Seu amigo secreto é ${nomeDosAmigos[amigoSorteado]}`
        nomeDosAmigos = [];
    };

    console.log(amigoSorteado);
};

function limparListaDeAmigos() {
    let amigosSecretos = [];
    console.log(amigosSecretos);
};

function limparCampo() {
    let amigos = document.querySelector('input');
    amigos.value = '';
};
