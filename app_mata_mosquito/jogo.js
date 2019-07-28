//decalração de variáveis para serem usadas na função logo abaixo.
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10

//Função para informar o tamanho da tela para redefinir a tela do jogo se necessário.
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();



var cronometro = setInterval(function(){

    tempo -=1;
    if(tempo < 0){

    }else{
    document.getElementById('cronometro').innerHTML = tempo;
    },1000)
}

function posicaoRandomica(){
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
    if (vidas > 3) {
        window.location.href = 'fim_de_jogo.html';
    } else{    
        //fazendo a troca de corações de vida 'cheio por vazio'
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
        vidas ++;
    }
    }

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
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

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

