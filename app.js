function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Proteção na entrada de valores:
    if(de >= ate) {
        alert('O valor "Do número" deve ser menor que o valor do campo "Até o número". Verifique os valores e tente novamente.');
        return;
    }

    //Proteção no total de números sorteados:
    if(quantidade > (ate - de + 1)) {
        alert('O campo "Quantidade" deve ser menor ou igual ao intervalo informado nos campos "Do número" e "Até o número". Verifique os valores e tente novamente.');
        return;
    }

    let sorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);

        // Verifica se o número já foi sorteado
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusDoBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusDoBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    alterarStatusDoBotao();
}