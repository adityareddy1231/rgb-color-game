var colors = generateRandomColors(6);
var squareColors = document.querySelectorAll('.square');
var targetColor = randomColorPick();
var targetColorText = document.querySelector('.targetColorText');
var selectionMessage = document.querySelector('.selectionMessage');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('.reset');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var numSquares = 6;

targetColorText.textContent = targetColor;

easy.addEventListener('click', function() {
  easy.classList.add('selected');
  hard.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  targetColor = randomColorPick();
  targetColorText.textContent = targetColor;
  for (var i = 0; i < squareColors.length; i++) {
    if (colors[i]) {
      squareColors[i].style.backgroundColor = colors[i];
    } else {
      squareColors[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  selectionMessage.textContent = "Start Playing!";
  resetButton.textContent = "New Colors";
});

hard.addEventListener('click', function() {
  hard.classList.add('selected');
  easy.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  targetColor = randomColorPick();
  targetColorText.textContent = targetColor;
  for (var i = 0; i < squareColors.length; i++) {
    squareColors[i].style.backgroundColor = colors[i];
    squareColors[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue";
  selectionMessage.textContent = "Start Playing!";
  resetButton.textContent = "New Colors";
});

resetButton.addEventListener('click', function() {
  colors = generateRandomColors(numSquares);
  targetColor = randomColorPick();
  targetColorText.textContent = targetColor;
  for (var i = 0; i < squareColors.length; i++) {
    squareColors[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  selectionMessage.textContent = "Start Playing!";
  this.textContent = "New Colors";
});

for (var i = 0; i < squareColors.length; i++) {
  //add color to squares
  squareColors[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squareColors[i].addEventListener('click', function() {
    // find color of clicked square
    var clickedColor = this.style.backgroundColor;

    //compare clickedColor to targetColor
    if (clickedColor === targetColor) {
      //alert winner
      selectionMessage.textContent = "Correct Color!";
      changeColorsToWinner(targetColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      //alert wrong color
      this.style.backgroundColor = "#232323";
      selectionMessage.textContent = "Try Again :(";
    }
  });
}

function changeColorsToWinner(color) {
  for (var i = 0; i < squareColors.length; i++) {
    squareColors[i].style.backgroundColor = color;
  }
}

function randomColorPick() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(numberOfColors) {
  var colorsArray = [];
  for (var i = 0; i < numberOfColors; i++) {
    colorsArray.push(randomColor());
  }
  return colorsArray;
}

function randomColor() {
  //pick red rgb number
  var r = Math.floor(Math.random() * 256);
  //pick blue rgb number
  var g = Math.floor(Math.random() * 256);
  //pick green rgb number
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
