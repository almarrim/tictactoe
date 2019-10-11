console.log('hey man')
const items = document.querySelectorAll('.items');
const board = document.querySelector('.board');
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
    this.removeEventListener('click', clicked)
    if (playerGreen) {
        greenClicked.push(this);
    }
    if (playerRed) {
        redClicked.push(this);
    }
    this.classList.value += ' clicked';
    clickedItems.push(this);
    gamePlay();
}
for (i of items) {
    i.addEventListener('mouseenter', turnGreen);
    i.addEventListener('mouseenter', turnRed);
    i.addEventListener('mouseout', turnDefault);
    i.addEventListener('click', clicked);
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
        playerGreen = true;
        playerRed = false;
        board.className = 'board';
        return console.log('this is a new game');
    }
    else {
        board.className += ' zindex';
        return console.log('see ya later dogg');
    }
}
const gameStatus = function () {
    if ((greenClicked.includes(items[0]) && greenClicked.includes(items[1]) && greenClicked.includes(items[2])) || (greenClicked.includes(items[3]) && greenClicked.includes(items[4]) && greenClicked.includes(items[5])) || (greenClicked.includes(items[6]) && greenClicked.includes(items[7]) && greenClicked.includes(items[8])) || (greenClicked.includes(items[0]) && greenClicked.includes(items[3]) && greenClicked.includes(items[6])) || (greenClicked.includes(items[1]) && greenClicked.includes(items[4]) && greenClicked.includes(items[7])) || ((greenClicked.includes(items[2]) && greenClicked.includes(items[5]) && greenClicked.includes(items[8])) || (greenClicked.includes(items[2]) && greenClicked.includes(items[4]) && greenClicked.includes(items[6])) || (greenClicked.includes(items[0]) && greenClicked.includes(items[4]) && greenClicked.includes(items[8]))
    )) {

        alert('congragulations yo green')
        return false;


    }
    if ((redClicked.includes(items[0]) && redClicked.includes(items[1]) && redClicked.includes(items[2])) || (redClicked.includes(items[3]) && redClicked.includes(items[4]) && redClicked.includes(items[5])) || (redClicked.includes(items[6]) && redClicked.includes(items[7]) && redClicked.includes(items[8])) || (redClicked.includes(items[0]) && redClicked.includes(items[3]) && redClicked.includes(items[6])) || (redClicked.includes(items[1]) && redClicked.includes(items[4]) && redClicked.includes(items[7])) || ((redClicked.includes(items[2]) && redClicked.includes(items[5]) && redClicked.includes(items[8])) || (redClicked.includes(items[2]) && redClicked.includes(items[4]) && redClicked.includes(items[6])) || (redClicked.includes(items[0]) && redClicked.includes(items[4]) && redClicked.includes(items[8]))
    )) {

        alert('congragulations yo red')
        return false;
    }
    if (clickedItems.length == 9) {
        alert('no more there, tie the tie')
        return false;
    }
    return true;
}

const dumbComp = function () {
    if (clickedItems.length < 9) {
        let selection = items[Math.floor(Math.random() * 9)];
        let i = 0;
        while (i == 0) {
            if (!(clickedItems.includes(selection))) {
                selection.className += ' red';
                clickedItems.push(selection);
                redClicked.push(selection);
                selection.removeEventListener('mouseenter', turnGreen);
                selection.removeEventListener('mouseenter', turnRed);
                selection.removeEventListener('mouseout', turnDefault);

                i++;
            }
            else {
                selection = items[Math.floor(Math.random() * 9)];
            }
        }
    }
    setTimeout(gamePlay, 10);
}

const changeTurn = function () {
    if (clickedItems.length < 9) {
        if (playerGreen) {
            playerGreen = !playerGreen;
            playerRed = !playerRed;
        }
        else {
            playerGreen = !playerGreen;
            playerRed = !playerRed;
        }
    }
}

const gamePlay = function () {
    if (gameStatus()) {
        changeTurn()
        if (playerRed) {
            dumbComp()
        }
    }
    else {
        const x = prompt('wanna play again? y for yes, or enter anything to exit');
        restIt(x);
    }
}

const playIt = function () {
    restIt('y');
}
const playagain = document.querySelector('.playagain');
playagain.addEventListener('click', playIt);

