
// In these Lines of codes both JavaScript and JQuery are Used...

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var newColors = document.querySelector("#newColors");
var h1 = document.querySelector("h1");
var easyb = document.querySelector("#easy");
var hardb = document.querySelector("#hard");
function logic()
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor)
			{
				message.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
				newColors.textContent = "Play Again?";
			} 
			else
			{
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}
logic();
function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(num)
{
	var arr=[];
	for (var i=0;i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}

//  JQuery used as eventSelector
$("#newColors").click(function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var s=0;s<squares.length;s++)
	{
		squares[s].style.background = colors[s];
	}
	newColors.textContent = "NEW COLORS";
	h1.style.background = "steelblue";
	message.textContent = "";
});

function easy()
{
	for (var i=3; i<squares.length; i++)
	{
		squares[i].style.background = "#232323";
	}
	easyb.classList.add("selected");
	hardb.classList.remove("selected");
	colors = generateRandomColors(3);
	squares = document.querySelectorAll(".es");
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	logic();
	h1.style.background = "steelblue";
}

// JQuery used as event selector
$("#easy").click(function(){
	easy();
	message.textContent = "";
	newColors.textContent = "NEW COLORS";
	newColors.addEventListener("click", function(){
		easy();
		newColors.textContent = "NEW COLORS";
		message.textContent = "";
	});
});

// JQuery used in adding and removing class
function hard()
{
	$("#hard").addClass("selected");
	$("#easy").removeClass("selected");
	colors = generateRandomColors(6);
	squares = document.querySelectorAll(".square");
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	logic();
	h1.style.background = "steelblue";
}

//JQuery used..
$("#hard").click(function(){
	hard();
	$("#message").text("");
	$("#newColors").text("NEW COLORS");
	$("#newColors").click(function(){
		hard();
		$("#newColors").text("NEW COLORS");
		$("#message").text("");
	});
});
