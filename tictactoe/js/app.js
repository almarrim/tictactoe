console.log('hey man')
const items = document.querySelectorAll('.items');
const board = document.querySelector('.board');
const playagain = document.querySelector('.playagain');
const clickedItems = [];
const greenClicked = [];
const redClicked = [];
let playerGreen = true;
let playerRed = false;
const gameStyle = ['human', 'easy', 'medium', 'hard']
let selectStyle = 0;
const players = ['Green', 'Red', 'Tie'];
let selectPlayer = 2;
const playStyle = ['human', 'dumpComp']
if (window.location.href.match('gameSetting.html') != null) {
    const moveToPlay = function () {
        if (document.querySelector('.two').checked) {
            console.log(document.querySelector('.two').checked, 'two')
            selectStyle = 1;
        }
        else if (document.querySelector('.three').checked) {
            selectStyle = 2;
            console.log(document.querySelector('.three').checked, 'three')
        }

        else if (document.querySelector('.four').checked) {
            selectStyle = 3;
            console.log(document.querySelector('.four').checked, 'four')
        }
        else if (document.querySelector('.one').checked) {
            selectStyle = 0;
            console.log(document.querySelector('.one').checked, 'one')
        }

        console.log(selectStyle, 'selectStyle')
        sessionStorage.setItem('x', selectStyle)

        console.log(' localstorage')
        window.location.replace('index.html')

    }

    const playButton = document.querySelector('#playbutton');
    if (playButton)
        playButton.addEventListener('click', moveToPlay)
}
if (window.location.href.match('index.html') != null) {
    if (sessionStorage.getItem('x')) {
        selectStyle = sessionStorage.getItem('x');
        sessionStorage.removeItem('x')
    }


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
            selectPlayer = 2;
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
            selectPlayer = 0;
            return false;


        }
        if ((redClicked.includes(items[0]) && redClicked.includes(items[1]) && redClicked.includes(items[2])) || (redClicked.includes(items[3]) && redClicked.includes(items[4]) && redClicked.includes(items[5])) || (redClicked.includes(items[6]) && redClicked.includes(items[7]) && redClicked.includes(items[8])) || (redClicked.includes(items[0]) && redClicked.includes(items[3]) && redClicked.includes(items[6])) || (redClicked.includes(items[1]) && redClicked.includes(items[4]) && redClicked.includes(items[7])) || ((redClicked.includes(items[2]) && redClicked.includes(items[5]) && redClicked.includes(items[8])) || (redClicked.includes(items[2]) && redClicked.includes(items[4]) && redClicked.includes(items[6])) || (redClicked.includes(items[0]) && redClicked.includes(items[4]) && redClicked.includes(items[8]))
        )) {

            console.log('leave red gamestatus')

            selectPlayer = 1;
            return false;
        }
        if (clickedItems.length == 9) {
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

        console.log('leave dumbComp')

    }
    const announceIt = function () {
        if (selectPlayer == 2) {
            console.log('tie side')
            alert('This is a tie')
        }
        else {
            console.log('winner side')
            alert('Congraulation yo ' + players[selectPlayer])
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
            console.log(gameStyle[selectStyle], 'before switch');

            switch (gameStyle[selectStyle]) {
                case 'easy':
                    dumbComp();
                    changeTurn();
                    break;

            }
        }
        if (!gameStatus()) {
            setTimeout(announceIt, 10);


        }
        console.log('leave gamePlay')

    }

    const playIt = function () {
        window.location.replace('gameSetting.html')
    }

    playagain.addEventListener('click', playIt);
    restIt('y');
}
