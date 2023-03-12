/*objetivo do código

Objetivo: Ao clicar em um botão, 
alterar a img ativa para a img correspondente ao botao selecionado

- Pegar ref dos botões no HTML
- Identificar o input de clique no botão
- Desmarcar botão selecionado anterior ('remover classe selecionado')
- Marcar botão clicado como se estivesse selecionado ('adicionar classe selecionado')
- Esconder imagem de fundo atual (remover classe 'ativa')
- Fazer aparecer a imagem de fundo correspondente ao botão clicado ('adicionar classe ativa')

*/

// Get HTML Buttons ref
const botoesCarrossel = document.querySelectorAll('.botao');
//Get BG Images ref
const imagensCarrossel = document.querySelectorAll('.imagem');

// Get user click input
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        atualizarBotaoSelecionado(botao);
        atualizarImagemAtivaProValorCorrespondente(indice);
    }
    )
}
);


function atualizarBotaoSelecionado(botao) {

    desativaBotaoSelecionado();
    selecionaBotaoClicado(botao);
}

function atualizarImagemAtivaProValorCorrespondente(indice) {

    escondeImagemDeFundoAtiva();
    mostrarImagemDeFundoNoIndex(indice);
}

function selecionaBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function mostrarImagemDeFundoNoIndex(indice) {
    imagensCarrossel[indice].classList.add('ativa');
}

function escondeImagemDeFundoAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

