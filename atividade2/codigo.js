var tela = document.querySelector("canvas");
var bandeira = tela.getContext('2d');

bandeira.fillStyle = 'green';
bandeira.fillRect(0, 0, 1280, 720);

bandeira.fillStyle = 'yellow';
bandeira.beginPath();
bandeira.moveTo(640, 0);
bandeira.lineTo(0, 360);
bandeira.lineTo(640, 720);
bandeira.lineTo(1280, 360);
bandeira.lineTo(640, 0);
bandeira.fill();


bandeira.fillStyle = 'blue';
bandeira.beginPath();
bandeira.moveTo(640, 360);
bandeira.arc(640, 360, 310, 0, 2*3.15);
bandeira.fill();

