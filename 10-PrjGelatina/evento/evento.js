function voltar() {
    window.location.href = "../index.html";
}

//logica da cor de fundo
//array de cores aleatórias em formato hexadecimal
const coresAleatorias = ['#ff5733', '#33ff57', '#5733ff', '#ff3357', '#57ff33'];

// Variável para armazenar o índice atual da cor
let indiceCorAtual = 0;

function alterarCorFundo() {
    //obter o elemento body
    const body = document.querySelector('body');

    //definir a cor de fundo de acordo com o indice atual
    body.style.backgroundColor = coresAleatorias[indiceCorAtual];

    //atualizar o indice para a proxima cor ou voltar ao inicio se chegou ao final
    indiceCorAtual = (indiceCorAtual + 1) % coresAleatorias.length;
}

//logica da animacao
function animarGelatina() {
    var gelatina = document.querySelector('.gelatina');

    gelatina.addEventListener('animationend', function () {
        gelatina.classList.remove('animar');
    });

    gelatina.classList.add('animar');
    alterarCorFundo();
}