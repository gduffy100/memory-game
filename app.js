if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
        myInitCode();
    });
}

function myInitCode() {

console.log("got Here")
	
	//card options
	const cardArray = [
	{
		name: 'luigi-yoshi',
		img: 'images/luigi-yoshi.png'
	},
	{
		name: 'luigi-yoshi',
		img: 'images/luigi-yoshi.png'
	},
	{
		name: 'mario-fire-wizard',
		img: 'images/mario-fire-wizard.png'
	},
	{
		name: 'mario-fire-wizard',
		img: 'images/mario-fire-wizard.png'
	},
	{
		name: 'mario-kart',
		img: 'images/mario-kart.png'
	},
	{
		name: 'mario-kart',
		img: 'images/mario-kart.png'
	},
	{
		name: 'mario-magic-ball',
		img: 'images/mario-magic-ball.png'
	},	
		{
		name: 'mario-magic-ball',
		img: 'images/mario-magic-ball.png'
	},	
	{
		name: 'mushroom-head',
		img: 'images/mushroom-head.png'
	},	
	{
		name: 'mushroom-head',
		img: 'images/mushroom-head.png'
	},	
	{
		name: 'wii-tennis',
		img: 'images/wii-tennis.png'
	},
	{
		name: 'wii-tennis',
		img: 'images/wii-tennis.png'
	}	
	];
	
	cardArray.sort(() => 0.5 - math.Random());
	
	// create your game board
	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];
	
	function createBoard() {
		for ( let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src','images/blank.png');
			card.setAttribute('data-id', i);
			// card.addEventListener('click', flipcard);
			grid.appendChild(card);
		}		
	}
	
	//check for matches
	function checkForMatch() {
		var cards =  document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]){
			alert('you found a match');
			cards[optionOneId].setAttribute('src','images/white.png');
			cards[optionTwoId].setAttribute('src','images/white.png');
			cardsWon.push(cardsChosen];
		}else {
			cards[optionOneId].setAttribute('src','images/blank.png');
			cards[optionTwoId].setAttribute('src','images/blank.png');
			alert('sorry, try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length/2){
			resultDisplay.textContent = 'Congratulation! you found them all';
		}
	}
	
	//flip your card
		function flipcard() {
			var cardId = this.getAttribute('data-id');
			cardsChosen.push(cardArray[cardId].name);
			cardsChosenId.push(cardId);
			this.setAttribute('src',cardArray[cardId].img);
			if (cardsChosen.length === 2){
				setTimeout(checkForMatch, 500);
			}
				
		}
	
	
	createBoard();

}