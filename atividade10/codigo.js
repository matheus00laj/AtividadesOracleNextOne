var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var x=20;
var y = 20;
var raio = 10;
var irEvoltar = true;
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);
    

    
function desenhaCirculo(x, y, raio) {
    
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
    
    
}

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}
function atualizaTela(){
    
    limpaTela();
    desenhaCirculo(x,y,raio);
    if(irEvoltar){
        vaiParaDireita();
    }
    else{
        vaiParaEsquerda();
    }
    

}
function vaiParaDireita(){
    x++;
    if(x==590){
        irEvoltar=false;
        
    }
}
function vaiParaEsquerda(){
    x--;
    if(x==10){
        irEvoltar=true;
        
    }
}
setInterval(atualizaTela, 1);
