function mudarCorTela(){
    pincel.fillStyle = corTela.value;
    pincel.fillRect(0, 0, 600, 400);
}

function mudarTamanho(){
    tamanhoP = tamanho.value;
    tamanhoR.value=tamanho.value;
}


function mudarTamanhoR(){
    tamanho.value=tamanhoR.value;
    tamanhoP = tamanhoR.value;
}

function exibeCirculo(evento){
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
    console.log(evento);
    if(desenha){
        pincel.fillStyle = cor.value;
        pincel.beginPath();
        pincel.arc(x, y, tamanhoP, 0, 2*3.15);
        pincel.fill();
    }
}

function habilitar(){
    desenha = true;
}

function desabilitar(){
    desenha = false
}



var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var cor = document.querySelector("input");
var contador = 0;
var tamanho= document.getElementById("03");
var desenha = false;
var corTela= document.getElementById("01");
var botaoMudar = document.getElementById("02");
var tamanhoR = document.getElementById("04");
var tamanhoP;


if(tamanhoP == undefined){
    tamanhoR.value=10;
    tamanho.value=10;
    tamanhoP=10;
}
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

botaoMudar.onclick = mudarCorTela;

tela.onmousemove = exibeCirculo;

tela.onmousedown = habilitar;

tela.onmouseup = desabilitar;




