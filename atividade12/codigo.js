var tela = document.getElementById("canvas_01");
var pincel = tela.getContext('2d');
var x=10;
var y=10;
var cima=38;
var baixo=40;
var direita=39;
var esquerda=37;
var taxa =5;

function pulsar(x, y){
    pincel.fillStyle='wheat';
    pincel.fillRect(0, 0, 500, 500);

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*Math.PI);
    pincel.fill();

}
function atualizaTela(){
    pincel.clearRect(0, 0, 500, 500);
    pulsar(x,y);
    
}
function lerTeclado(evento){
    if(evento.keyCode == cima){
        y=y-taxa;
    }
    else if(evento.keyCode == direita){
        x=x+taxa;

    }
    else if(evento.keyCode == esquerda){
        x=x-taxa;
    }
    else if(evento.keyCode==baixo){
        y=y+taxa;
    }
}

document.onkeydown = lerTeclado;



setInterval(atualizaTela, 10);