//decalração de variáveis para serem usadas na função logo abaixo.
var altura = 0;
var largura = 0;

//Função para informar o tamanho da tela para redefinir a tela do jogo se necessário.
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();


function posicaoRandomica(){
    //criação da posição randomica do mosquito 
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    console.log(posicaoX, posicaoY);

    //evitando que haja posições negativas da imagem do mosquito na tela.
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criando elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio(), ladoAleatorio();
    //posicionando o eixo da imagem left-top(canto superior esquerdo).
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    //mosquito.id = 'mosquito';

    document.body.appendChild(mosquito);

}

function tamanhoAleatorio (){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1';
        
        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2);

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

