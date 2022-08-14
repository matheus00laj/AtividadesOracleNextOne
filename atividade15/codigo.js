var tela = document.getElementById("canvas-01");
var pincel = tela.getContext("2d");
var desenhar = false;
var cor = 'black';
var x;
var y;
var tamanho = document.getElementById("tamanho-1");
var raio=10;
var limpar = document.getElementById("bot1");
tamanho.value="10";
pincel.fillStyle = 'wheat';
pincel.fillRect(0,0,500,500);

pincel.fillStyle='green';
pincel.fillRect(0, 450, 125, 500);

function desenharTela(evento){
    x= evento.pageX;
    y= evento.pageY;
    raio = tamanho.value;
    if(desenhar){
        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2*Math.PI);
        pincel.fill();
    }
}

function habilita(){
    desenhar=true;
}

function desabilita(){
    desenhar = false;
}

function tamanhoTraco(){
    return tamanho.value;
}

function limpaTela(){
    pincel.fillStyle = 'wheat';
    pincel.fillRect(0,0,500,500);
}

function mudarCores(){
    pincel.fillStyle='green';
    pincel.fillRect(0, 450, 125, 500);

    pincel.fillStyle='red';
    pincel.fillRect(125, 450, 125, 500);
    
    pincel.fillStyle='blue';
    pincel.fillRect(250, 450, 125, 500);

    pincel.fillStyle='black';
    pincel.fillRect(375, 450, 125, 500);
}

function cores(evento){
    if(evento.pageX >= 0 && evento.pageX <= 125 && evento.pageY >=450 && evento.pageY<=500){
        cor = 'green';
    }
    else if(evento.pageX >= 125 && evento.pageX <= 250 && evento.pageY >=450 && evento.pageY<=500){
        cor = 'red';
    }
    else if(evento.pageX >= 250 && evento.pageX <= 375 && evento.pageY >=450 && evento.pageY<=500){
        cor = 'blue';
    }
    else if(evento.pageX >= 375 && evento.pageX <= 500 && evento.pageY >=450 && evento.pageY<=500){
        cor = 'black';
    }
}


tela.onmousedown = habilita;
tela.onmouseup = desabilita;
tela.onmousemove = desenharTela;
tela.onclick = cores;
limpar.onclick = limpaTela;

setInterval(mudarCores, 200);


