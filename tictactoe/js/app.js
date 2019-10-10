console.log('hey man')
const items = document.querySelectorAll('.items');
const clickedItems = [];
const greenClicked = [];
const redClicked = [];
let playerGreen = true;
let playerRed = false;
const turnGreen = function () {
    if (playerGreen)
        this.className += ' green';
}
const turnRed = function () {
    if (playerRed)
        this.className += ' red';
}

const turnDefault = function () {
    this.className = 'items';
}
const clicked = function () {
    this.removeEventListener('mouseenter', turnGreen);
    this.removeEventListener('mouseenter', turnRed);
    this.removeEventListener('mouseout', turnDefault);
    if (playerGreen) {
        greenClicked.push(this);
    }
    else {
        redClicked.push(this);
    }
    this.classList.value += ' clicked';
    clickedItems.push(this);
    gameStatus();
    gamePlay();
}
const restIt = function (x) {

    if (x == 'y') {
        for (i of items) {
            i.addEventListener('mouseenter', turnGreen);
            i.addEventListener('mouseenter', turnRed);
            i.addEventListener('mouseout', turnDefault);
            i.addEventListener('click', clicked);
            i.className = 'items';

        }

        while (clickedItems.length > 0) {
            clickedItems.pop();
        }
        while (greenClicked.length > 0) {
            greenClicked.pop();
        }
        while (redClicked.length > 0) {
            redClicked.pop();
        }
        playerGreen = false;
        playerRed = true;
        return console.log('this is a new game')
    }
    else {
        document.querySelector('.board').className += ' zindex';
        return console.log('see ya later dogg');
    }
}
const gameStatus = function () {
    if ((greenClicked.includes(items[0]) && greenClicked.includes(items[1]) && greenClicked.includes(items[2])) || (greenClicked.includes(items[3]) && greenClicked.includes(items[4]) && greenClicked.includes(items[5])) || (greenClicked.includes(items[6]) && greenClicked.includes(items[7]) && greenClicked.includes(items[8])) || (greenClicked.includes(items[0]) && greenClicked.includes(items[3]) && greenClicked.includes(items[6])) || (greenClicked.includes(items[1]) && greenClicked.includes(items[4]) && greenClicked.includes(items[7])) || ((greenClicked.includes(items[2]) && greenClicked.includes(items[5]) && greenClicked.includes(items[8])) || (greenClicked.includes(items[2]) && greenClicked.includes(items[4]) && greenClicked.includes(items[6])) || (greenClicked.includes(items[0]) && greenClicked.includes(items[4]) && greenClicked.includes(items[8]))
    )) {

        alert('congragulations yo green')
        const x = prompt('wanna play again? y for yes n for no');
        restIt(x);
    }
    if ((redClicked.includes(items[0]) && redClicked.includes(items[1]) && redClicked.includes(items[2])) || (redClicked.includes(items[3]) && redClicked.includes(items[4]) && redClicked.includes(items[5])) || (redClicked.includes(items[6]) && redClicked.includes(items[7]) && redClicked.includes(items[8])) || (redClicked.includes(items[0]) && redClicked.includes(items[3]) && redClicked.includes(items[6])) || (redClicked.includes(items[1]) && redClicked.includes(items[4]) && redClicked.includes(items[7])) || ((redClicked.includes(items[2]) && redClicked.includes(items[5]) && redClicked.includes(items[8])) || (redClicked.includes(items[2]) && redClicked.includes(items[4]) && redClicked.includes(items[6])) || (redClicked.includes(items[0]) && redClicked.includes(items[4]) && redClicked.includes(items[8]))
    )) {

        alert('congragulations yo red')
        const x = prompt('wanna play again? y for yes n for no');
        restIt(x);
    }
    if (clickedItems.length == 9) {
        alert('no more there, tie the tie')
        const x = prompt('wanna play again? y for yes n for no');
        restIt(x);
    }
}
for (i of items) {
    i.addEventListener('mouseenter', turnGreen);
    i.addEventListener('mouseenter', turnRed);
    i.addEventListener('mouseout', turnDefault);
    i.addEventListener('click', clicked);
}
const gamePlay = function () {
    if (playerGreen) {
        playerGreen = !playerGreen;
        playerRed = !playerRed;
    }
    else {
        playerGreen = !playerGreen;
        playerRed = !playerRed;
    }

}
