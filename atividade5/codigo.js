

function quadradoG(){
    let coress = 'green';
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'white';
    pincel.fillRect(0,0,600,400);
    var x=0;
    var y=0;
    var contador=0;
    var quantidade = parseInt(quantos.value);
    console.log(cor.value);
    for(var i=0;i<quantidade;i++){
        
        pincel.fillStyle= coress;
        pincel.fillRect(x,y,50,50);
        pincel.strokeStyle = 'white';
        pincel.strokeRect(x,y,50,50);
        
        x=x+50;
        contador++;
        if(contador==12){
            y=y+50;
            x=0;
            contador=0;
        }
    }
    
}
var botao = document.querySelector("button");
var quantos = document.querySelector("input");
var cor = document.querySelector("option");
botao.onclick = quadradoG;

