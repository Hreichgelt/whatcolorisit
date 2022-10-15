let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("displayColor");
let messageDisplay = document.querySelector("#message");
let heading = document.querySelector("#heading");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns() {
    for (let i = 0; i < modeButtons.length; i ++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? (numberOfSquares = 3) : (numberOfSquares = 6);
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct';
                changeColors(clickedColor);
                heading.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
};

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickedColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    heading.style.backgroundColor = 'steelBlue';
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
}

function changeColors(color) {
    for (let i = 0; i <squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickedColor() {
    let random = Math.floor(Math.random() * colors.length);
    let arr = [];
    for (let i = 0; i < numberOfSquares; i++) {
        arr.push(randomColor());
    }
    return arr;
}