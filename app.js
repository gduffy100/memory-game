document.addEventListener('DOMContentLoaded', () = {
	
	//card options
	const cardArray = [
	{
		name: "luigi-yoshi",
		img: "images/luigi-yoshi.png"
	},
	{
		name: "luigi-yoshi",
		img: "images/luigi-yoshi.png"
	},
	{
		name: "mario-fire-wizard",
		img: "images/mario-fire-wizard.png"
	},
	{
		name: "mario-fire-wizard",
		img: "images/mario-fire-wizard.png"
	},
	{
		name: "mario-kart",
		img: "images/mario-kart.png"
	},
	{
		name: "mario-kart",
		img: "images/mario-kart.png"
	},
	{
		name: "mario-magic-ball",
		img: "images/mario-magic-ball.png"
	},	
		{
		name: "mario-magic-ball",
		img: "images/mario-magic-ball.png"
	},	
	{
		name: "mushroom-head",
		img: "images/mushroom-head.png"
	},	
	{
		name: "mushroom-head",
		img: "images/mushroom-head.png"
	},	
	{
		name: "wii-tennis",
		img: "images/wii-tennis.png"
	},
	{
		name: "wii-tennis",
		img: "images/wii-tennis.png"
	}	
	];
	
	// create your game board
	const grid = document.querySelector('.grid');
	
	function createBoard() {
		for ( let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src','images/blank.png');
			card.setAttribute('data-id', i);
			// card.addEventListener('click', flipcard);
			grid.appendChild(card);
		}		
	}
	
	createBoard();

})