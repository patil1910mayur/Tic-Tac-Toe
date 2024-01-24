let bgMusic = new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let goverMusic = new Audio("gameover.mp3")

// Function to change the turn
let turn = "X"
let isGameoaver = false

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a Win
const checkWin = () => {
    let textBox =document.getElementsByClassName("text-box");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach( e => {
        if ( (textBox[e[0]].innerHTML === textBox[e[1]].innerHTML ) && (textBox[e[2]].innerHTML === textBox[e[1]].innerHTML ) && (textBox[e[0]].innerHTML !== "" ) ) {
            document.querySelector('.info').innerHTML = textBox[e[0]].innerHTML + " Won"
            isGameoaver = true
            document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "150px"
        }
    } )
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let textBox = element.querySelector(".text-box");
    element.addEventListener('click', () => {
        if (textBox.innerHTML === '') {
            textBox.innerHTML = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!isGameoaver) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})

// Onclick to reset button
reset.addEventListener('click', () => {
    let textBoxs = document.querySelectorAll(".text-box");
    Array.from(textBoxs).forEach(element => {
        element.innerHTML = ""
    });
    turn = "X";
    isGameoaver = false
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "0px"
} )