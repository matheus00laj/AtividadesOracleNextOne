var tela = document.getElementById("canvas_01");
var pincel = tela.getContext('2d');
var raio=20;
var pulso= true;

function pulsar(raio){
    pincel.fillStyle='wheat';
    pincel.fillRect(0, 0, 500, 500);

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(250, 250, raio, 0, 2*Math.PI);
    pincel.fill();

}
function atualizaTela(){
    pincel.clearRect(0, 0, 500, 500);
    pulsar(raio);
    if(pulso){
        cresce();
    }
    else{
        diminui();
    }
}

function cresce(){
    raio++;
    if(raio==30){
        pulso = false;
    }
}

function diminui(){
    raio--;
    if(raio==20){
        pulso = true;
    }
}

setInterval(atualizaTela, 20);