var intervalo = true;
var contador = 0;
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
function desenhaBandeiraBrasil() {
    

    pincel.fillStyle="green";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle="yellow";
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle="darkblue";
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2* 3.14);
    pincel.fill();
}


function desenhaBandeiraAlemanha() {
    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}

function mostraBandeiras(){
    pincel.clearRect(0,0,600,400);
    if(intervalo){
        desenhaBandeiraBrasil();
        aumenta();
    }
    else{
        desenhaBandeiraAlemanha();
        diminui();
    }
    
    
}
function aumenta(){
    contador++;
    if(contador==2){
        intervalo=false;
    }
}
function diminui(){
    contador--;
    if(contador==0){
        intervalo=true;
    }
}

setInterval(mostraBandeiras, 1000);