var tela = document.getElementById("tela");
var pincel =  tela.getContext("2d");
var x;
var y;
var raio =10;
pincel.fillStyle = 'wheat';
pincel.fillRect(0, 0, 960, 768);
function mostraCirculos(){
    x = Math.round(Math.random()*960);
    y = Math.round(Math.random()*768);

    pincel.clearRect(0,0,960,768)

    console.log(x,y);
    pincel.fillStyle = 'wheat';
    pincel.fillRect(0, 0, 960, 768);

    desenhaCirculo(x,y,raio+30, 'red');
    desenhaCirculo(x,y,raio+10, 'white');
    desenhaCirculo(x,y,raio, 'red');
    
    
}
function alerta(evento){
    if((evento.pageX - tela.offsetLeft) >= x-raio && (evento.pageX - tela.offsetLeft) <= x+raio && (evento.pageY - tela.offsetTop) >= y-raio && (evento.pageY - tela.offsetTop) <= y+raio){
        alert("ACERTOU!");
    }
    
}
function desenhaCirculo(x,y,raio, cor){
    pincel.fillStyle= cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*Math.PI);
    pincel.fill();
}
tela.onclick = alerta;
setInterval(mostraCirculos, 1500);