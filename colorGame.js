
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//sets the numSquares and displays the colors via reset()
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected"); // This refers to the button that was clicked on


		// this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // this does the following if statement in one line
		if(this.textContent === "Easy"){
			numSquares = 3;
		}
		else{
			numSquares = 6;
		}

		reset();
	});
	}

	//logic that compared the clicked color to the picked color
	for (var i = 0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of the clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});	
	}

	reset();
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){ 		// is there a color that matches that square
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop though all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = pickedColor;
	}
}

function randomColor(){
	var red = Math.floor(Math.random() * 256) //256 because we are rounding down
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColors(num){
	//make a list
	var list = [];
	//repeat num times
	for (var i = 0; i < num; i++){
		console.log(randomColor());
		list.push(randomColor());
	}
	console.log(list);
	//return the list
	return list;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
