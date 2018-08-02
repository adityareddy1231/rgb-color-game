var numSquares = 6;
var colors = [];
var targetColor;

//Selecting different parts of DOM
var squareColors = document.querySelectorAll('.square');
var targetColorText = document.querySelector('.targetColorText');
var selectionMessage = document.querySelector('.selectionMessage');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('.reset');
var modeButtons = document.querySelectorAll('.mode');

//intializing
init();

//adding resetButton event listener;
resetButton.addEventListener('click', function() {
  reset();
});

//initialization logic
function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

//Easy Hard buttons logic
function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

//Square clicked event listener and logic
function setupSquares() {
  for (var i = 0; i < squareColors.length; i++) {
    //add click listeners to squares
    squareColors[i].addEventListener('click', function() {
      // find color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare clickedColor to targetColor
      if (clickedColor === targetColor) {
        //alert winner
        changeColorsToWinner(targetColor);
        selectionMessage.textContent = "Correct Color!";
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        //alert wrong color
        this.style.backgroundColor = "#232323";
        selectionMessage.textContent = "Try Again :(";
      }
    });
  }
}

//reset function logic
function reset() {
  colors = generateRandomColors(numSquares);
  targetColor = randomColorPick();
  targetColorText.textContent = targetColor;
  h1.style.backgroundColor = "steelblue";
  selectionMessage.textContent = "Start Playing!";
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squareColors.length; i++) {
    if (colors[i]) {
      squareColors[i].style.display = "block";
      squareColors[i].style.backgroundColor = colors[i];
    } else {
      squareColors[i].style.display = "none";
    }
  }
}

//changing all square colors to winner
function changeColorsToWinner(color) {
  for (var i = 0; i < squareColors.length; i++) {
    squareColors[i].style.backgroundColor = color;
  }
}

//picking random colors logic
function randomColorPick() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

//generating array of random RGB values
function generateRandomColors(numberOfColors) {
  var colorsArray = [];
  for (var i = 0; i < numberOfColors; i++) {
    colorsArray.push(randomColor());
  }
  return colorsArray;
}

//generating random RGB value
function randomColor() {
  //pick red rgb number
  var r = Math.floor(Math.random() * 256);
  //pick blue rgb number
  var g = Math.floor(Math.random() * 256);
  //pick green rgb number
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
