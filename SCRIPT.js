//as ordems aleatoria que vão ascender
let order = [];
//ordem dos nossos clicks
let clickedOrder = [];
//pontuacão
var score = 0;

//0=verde; 1=vermelho; 2=amarelo; 3=azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
	clickedOrder = [];
	
	for(let i in order){
		let elementColor = createColorElement(order[i])
		lightColor(elementColor, Number(i) + 1)
	}
}

//acende a proxima cor
let lightColor = (element, number) => {
	number = number * 500;
	setTimeout(() => {
		element.classList.add('selected');
	}, number - 250);
	setTimeout(() =>{
		element.classList.remove('selected');
	});
}

//checa se os botões clicados são os mesmo gerado pelo jogo
let checkOrder = () => {
	for(let i in clickedOrder){
		if(clickedOrder != order[i]){
			gameOver();
			break;
		}
	}
	if(clickedOrder.length == order.length){
		alert('Pontuação:' + score + 'Voce acertou Proximo nivel!');
		nextLevel();
	}
} 

//funcao para o clique do usuario

let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');
	
	setTimeout(() => {
		createColorElement(color).classList.remove('selected');
		checkOrder();
	}, 250);
	
}

//funcao que retorna a cor

let createColorElement = (color) => {
	if(color == 0){
		return green;
	}else if(color == 1){
		return red;
	}else if(color == 2){
		return yellow;
	}else if(color == 3){
		return blue;
	}
}
//proximo nivel
let nextLevel = () => {
	score++;
	shuffleOrder();
}

//para game over

let gameOver = () => {
	alert('pontuacao: ' + score + ' Perdeu, click em ok para novo jogo ' );
	order = [];
	clickedOrder = [];
	
	playGame();
}

//inicio de jogo
let playGame = () => {
	alert('Bem vindo  ')
	score = 0;
	
	nextLevel();
}

//eventos de click pra as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio de jogo
playGame();























































