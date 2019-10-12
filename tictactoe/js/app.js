console.log('hey man')
const items = document.querySelectorAll('.items');
const board = document.querySelector('.board');
const clickedItems = [];
const greenClicked = [];
const redClicked = [];
let playerGreen = true;
let playerRed = false;
const players = ['Green', 'Red', 'Tie'];
const x = 2;
const playStyle = ['human', 'dumpComp']
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
    console.log('enter clicked')
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
    console.log('leave clicked')

}
for (i of items) {
    i.addEventListener('mouseenter', turnGreen);
    i.addEventListener('mouseenter', turnRed);
    i.addEventListener('mouseout', turnDefault);
    i.addEventListener('click', clicked);
}
const restIt = function (x) {
    console.log('enter resetIT')


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
        winner = 2;
        return console.log('this is a new game');
    }
    else {
        board.className += ' zindex';
        return console.log('see ya later dogg');
    }
    console.log('leave reset')

}
const gameStatus = function () {
    console.log('enter gamestatus')

    if ((greenClicked.includes(items[0]) && greenClicked.includes(items[1]) && greenClicked.includes(items[2])) || (greenClicked.includes(items[3]) && greenClicked.includes(items[4]) && greenClicked.includes(items[5])) || (greenClicked.includes(items[6]) && greenClicked.includes(items[7]) && greenClicked.includes(items[8])) || (greenClicked.includes(items[0]) && greenClicked.includes(items[3]) && greenClicked.includes(items[6])) || (greenClicked.includes(items[1]) && greenClicked.includes(items[4]) && greenClicked.includes(items[7])) || ((greenClicked.includes(items[2]) && greenClicked.includes(items[5]) && greenClicked.includes(items[8])) || (greenClicked.includes(items[2]) && greenClicked.includes(items[4]) && greenClicked.includes(items[6])) || (greenClicked.includes(items[0]) && greenClicked.includes(items[4]) && greenClicked.includes(items[8]))
    )) {

        // alert('congragulations yo green')
        console.log('leave green gamestatus')
        winner = 0;
        return false;


    }
    if ((redClicked.includes(items[0]) && redClicked.includes(items[1]) && redClicked.includes(items[2])) || (redClicked.includes(items[3]) && redClicked.includes(items[4]) && redClicked.includes(items[5])) || (redClicked.includes(items[6]) && redClicked.includes(items[7]) && redClicked.includes(items[8])) || (redClicked.includes(items[0]) && redClicked.includes(items[3]) && redClicked.includes(items[6])) || (redClicked.includes(items[1]) && redClicked.includes(items[4]) && redClicked.includes(items[7])) || ((redClicked.includes(items[2]) && redClicked.includes(items[5]) && redClicked.includes(items[8])) || (redClicked.includes(items[2]) && redClicked.includes(items[4]) && redClicked.includes(items[6])) || (redClicked.includes(items[0]) && redClicked.includes(items[4]) && redClicked.includes(items[8]))
    )) {

        // alert('congragulations yo red')
        console.log('leave red gamestatus')

        winner = 1;
        return false;
    }
    if (clickedItems.length == 9) {
        // alert('no more there, tie the tie')
        console.log('leave tie gamestatus')

        return false;
    }
    console.log('leave gamestatus')

    return true;
}

const dumbComp = function () {
    console.log('enter dumbComp')

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

    // setTimeout(gamePlay, 10);
    console.log('leave dumbComp')

}
const announceIt = function () {
    if (winner == 2) {
        console.log('tie side')
        alert('This is a tie')
    }
    else {
        console.log('winner side')
        alert('Congraulation yo ' + players[winner])
    }
    const x = prompt('wanna play again? y for yes, or enter anything to exit');
    restIt(x);
    return console.log('got Delayed');
}
const changeTurn = function () {
    console.log('enter changeTurn')

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
    console.log('leave changeTurn')

}

const gamePlay = function () {
    console.log('enter gamePlay')

    if (gameStatus()) {
        changeTurn()
        dumbComp()
        changeTurn()
    }
    if (!gameStatus()) {
        setTimeout(announceIt, 10);


    }
    console.log('leave gamePlay')

}

const playIt = function () {
    restIt('y');
}
const playagain = document.querySelector('.playagain');
playagain.addEventListener('click', playIt);

