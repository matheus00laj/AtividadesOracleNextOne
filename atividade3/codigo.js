var tela = document.querySelector("canvas");
var creeper = tela.getContext('2d');

creeper.fillStyle = 'green';
creeper.fillRect(0, 0, 500, 500);

creeper.fillStyle = 'black';
creeper.fillRect(50, 50, 150, 150);
creeper.fillStyle = 'black';
creeper.fillRect(300, 50, 150, 150);

creeper.fillStyle = 'black';
creeper.fillRect(200, 200, 100, 150);

creeper.fillStyle = 'black';
creeper.fillRect(120, 270, 80, 180);
creeper.fillStyle = 'black';
creeper.fillRect(300, 270, 80, 180);

