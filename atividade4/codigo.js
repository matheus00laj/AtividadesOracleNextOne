var tela = document.querySelector("canvas");
var esquadro = tela.getContext('2d');


esquadro.fillStyle = 'black';
esquadro.beginPath();
esquadro.moveTo(50, 50);
esquadro.lineTo(400, 400);
esquadro.lineTo(50, 400);
esquadro.fill();

esquadro.fillStyle = 'white';
esquadro.beginPath();
esquadro.moveTo(100, 175);
esquadro.lineTo(275, 350);
esquadro.lineTo(100, 350);
esquadro.fill();