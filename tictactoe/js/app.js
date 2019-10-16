console.log('hey man')
const items = document.querySelectorAll('.items');
const board = document.querySelector('.board');
const seeYou = document.querySelector('.Goodbye');
const playagain = document.querySelector('.playagain');
const result1 = document.querySelector('.score1');
const result2 = document.querySelector('.score2');
const tie = document.querySelector('.tie');
// const tokenx = document.querySelector('.token1x');
// const tokeno = document.querySelector('.token1o');
// const player1info = document.querySelector('.player1info');
// const player2info = document.querySelector('.player2info');
const clickedItems = [];
const greenClicked = [];
const redClicked = [];
const virtualBoard = [];
let playerOneToken = 'X';
let playerTwoToken = 'O';
// let player1class = ' green';
// let player2class = ' red';
let playerGreen = true;
let playerRed = false;
let playerOne;
let playerTwo;
let score1 = 0;
let score2 = 0;
let scoretie = 0
const gameStyle = ['human', 'easy', 'medium', 'hard']
let selectStyle = 2;
const players = ['Green', 'Red', 'Tie'];
let selectPlayer = 2;
const playStyle = ['human', 'dumpComp'];
const beatStyle = ['corner', 'center', 'middle'];
let beatSelector;
// if (window.location.href.match('gameSetting.html') != null) {
//     const moveToPlay = function () {
//         if (document.querySelector('.two').checked) {
//             selectStyle = 1;
//             window.location.href = '#gamePlay'
//         }
//         else if (document.querySelector('.three').checked) {
//             selectStyle = 2;
//             window.location.href = '#gamePlay'
//         }

//         else if (document.querySelector('.four').checked) {
//             selectStyle = 3;
//             console.log(document.querySelector('.four').checked, 'four')
//             window.location.href = '#gamePlay'

//         }
//         else if (document.querySelector('.one').checked) {
//             selectStyle = 0;
//             console.log(document.querySelector('.one').checked, 'one')
//             window.location.href = '#gamePlay'

//         }

//         console.log(selectStyle, 'selectStyle')
//         sessionStorage.setItem('x', selectStyle)

//         console.log(' localstorage')
//         window.location.replace('index.html')

//     }

// }
// if (window.location.href.match('index.html') != null) {
const resetIt = function (x) {
    console.log('enter resetIT')



    for (i of items) {
        i.addEventListener('mouseenter', turnGreen);
        i.addEventListener('mouseenter', turnRed);
        i.addEventListener('mouseout', turnDefault);
        i.addEventListener('click', clicked);
        i.className = 'items';
        i.innerText = '';

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
    seeYou.className = 'Goodbye';
    selectPlayer = 2;
    console.log('scoreing 1', score1)


    if (x == 'y') {
        window.location.href = '#gamePlay'
    }
    else {
        window.location.href = '#bye';
    }
    console.log('leave reset')

}
const moveToPlay = function () {
    resetIt();
    if (document.querySelector('.two').checked) {
        selectStyle = 1;
        window.location.href = '#gamePlay'
    }
    else if (document.querySelector('.three').checked) {
        selectStyle = 2;
        window.location.href = '#gamePlay'
    }

    else if (document.querySelector('.four').checked) {
        selectStyle = 3;
        console.log(document.querySelector('.four').checked, 'four')
        window.location.href = '#gamePlay'

    }
    else if (document.querySelector('.one').checked) {
        selectStyle = 0;
        console.log(document.querySelector('.one').checked, 'one')
        window.location.href = '#gamePlay';

    }
    if (document.querySelector('.token1o').checked) {
        playerOneToken = 'O';
        playerTwoToken = 'X';
        // player1info.className = 'player1info '
        // player2info.className = 'player2info '
        // player1class = ' red';
        // player2class = ' green';


    }
    else {
        playerOneToken = 'X';
        playerTwoToken = 'O';
        // player1info.className = 'player1info '
        // player2info.className = 'player2info '
        // player1class = ' green';
        // player2class = ' red';
    }
    console.log(selectStyle, 'selectStyle')
    localStorage.setItem('x', selectStyle);
    playerOne = document.querySelector('.thenames1').value || 'Player One';
    document.querySelector('.name1').innerText = playerOne;
    if (document.querySelector('.thenames2').value) {
        playerTwo = document.querySelector('.thenames2').value || 'Player Two';
        document.querySelector('.name2').innerText = playerTwo;
    }
    console.log(' localstorage')
    // window.location.replace('index.html')
}

const playButton = document.querySelector('#playbutton');

playButton.addEventListener('click', moveToPlay)

// if (sessionStorage.getItem('x')) {
//     selectStyle = sessionStorage.getItem('x');
//     sessionStorage.removeItem('x')
// }

const turnGreen = function () {
    if (playerGreen)
        this.className += ' green';
}
const turnRed = function () {
    if (playerRed)
        this.className += ' red';
}
const hover = function () {
    this.className += ' hover';
    console.log('hover all over')
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
        this.innerText = playerOneToken;

        console.log('greenclicked', this)
    }
    if (playerRed) {
        redClicked.push(this);
        this.innerText = playerTwoToken;

    }
    this.classList.value += ' clicked';
    clickedItems.push(this);
    gamePlay();
    console.log('leave clicked')

}
for (i of items) {
    i.addEventListener('mouseenter', turnGreen);
    i.addEventListener('mouseenter', hover);
    i.addEventListener('mouseenter', turnRed);
    i.addEventListener('mouseout', turnDefault);
    i.addEventListener('click', clicked);
}
const boardhover = function () {
    this.className += ' boardhover'
}
const boardDefault = function () {
    this.className = 'board';
    console.log('here');
}
board.addEventListener('mouseover', boardhover);
board.addEventListener('mouseout', boardDefault);


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

const dumbComp = function (selection) {
    console.log('enter dumbComp')

    if (clickedItems.length < 9) {
        selection = items[Math.floor(Math.random() * 9)];
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

        selection.innerText = playerTwoToken

    }

    console.log('leave dumbComp')

}
const medBrain = function (winClick, selection, player) {
    console.log(player, 'player')
    const beatClick = [];
    console.log(selection, 'initial medBrain')
    for (i of winClick) {
        if (player.includes(items[i])) {
            beatClick.push(items[i])
        }
    }
    if (beatClick.length == 2) {
        for (i of winClick) {
            if ((!(beatClick.includes(items[i]))) && (!(clickedItems.includes(items[i])))) {
                selection = items[i];
                console.log(selection, 'found')
                return selection;
            }

        }
    }
    console.log(selection, 'end medbrain')

}

const medComp = function () {
    let selection;
    let player = redClicked;
    for (i in [1, 1]) {
        console.log(i, 'iiiii')
        if (i == 1)
            player = greenClicked
        if ((!selection) && (player.includes(items[0]) || player.includes(items[1]) || player.includes(items[2]))) {
            console.log(1)
            const winClick = ['0', '1', '2'];
            // if (i == 0)
            selection = medBrain(winClick, selection, player);
            // if (i == 1)
            //     selection = medBrain(winClick, selection, greenClicked);
        }
        if ((!selection) && (player.includes(items[3]) || player.includes(items[4]) || player.includes(items[5]))) {
            console.log(2)

            const winClick = ['3', '4', '5'];
            // if (i == 0)
            selection = medBrain(winClick, selection, player);
            // if (i == 1)
            //     selection = medBrain(winClick, selection, greenClicked);
        }
        if ((!selection) && (player.includes(items[6]) || player.includes(items[7]) || player.includes(items[8]))) {
            console.log(3)

            const winClick = ['6', '7', '8'];
            // if (!i)
            selection = medBrain(winClick, selection, player);
            // if (i)
            //     selection = medBrain(winClick, selection, greenClicked);
        }

        if ((!selection) && (player.includes(items[0]) || player.includes(items[3]) || player.includes(items[6]))) {
            console.log(4)

            const winClick = ['0', '3', '6'];
            // if (!i)
            selection = medBrain(winClick, selection, player);
            // if (i)
            //     selection = medBrain(winClick, selection, greenClicked);
        }
        if ((!selection) && (player.includes(items[1]) || player.includes(items[4]) || player.includes(items[7]))) {
            console.log(5)
            const winClick = ['1', '4', '7'];
            // if (!i)
            selection = medBrain(winClick, selection, player);
            // if (i)
            //     selection = medBrain(winClick, selection, greenClicked);
        }
        if ((!selection) && (player.includes(items[2]) || player.includes(items[5]) || player.includes(items[8]))) {
            console.log(6)

            const winClick = ['2', '5', '8'];
            // if (!i)
            selection = medBrain(winClick, selection, player);
            // if (i)
            //     selection = medBrain(winClick, selection, greenClicked);
        }
        if ((!selection) && (player.includes(items[2]) || player.includes(items[4]) || player.includes(items[6]))) {
            console.log(7)

            const winClick = ['2', '4', '6'];
            // if (!i)
            selection = medBrain(winClick, selection, player);
            // if (i)
            //     selection = medBrain(winClick, selection, greenClicked);
        }
        if ((!selection) && (player.includes(items[0]) || player.includes(items[4]) || player.includes(items[8]))) {
            console.log(8)
            const winClick = ['0', '4', '8'];
            // if (!i)
            selection = medBrain(winClick, selection, player);
            // if (i)
            //     selection = medBrain(winClick, selection, greenClicked);
            console.log(selection)
        }
    }
    console.log(selection, 'selection')
    if (selection) {
        console.log('enter selection')
        selection.className += ' red';
        clickedItems.push(selection);
        redClicked.push(selection);
        selection.removeEventListener('mouseenter', turnGreen);
        selection.removeEventListener('mouseenter', turnRed);
        selection.removeEventListener('mouseout', turnDefault);
        selection.innerText = playerTwoToken;
    }
    else {
        console.log('eneter else selection')
        dumbComp(selection)
    }
}
// const hardBrain = function (playerClicked, beatSelector, selection) {
//     if (clicked.length == 1) {

//         if (clicked[0] == items[4]) {
//             selection = items[0];
//             return selection;
//         }
//         else {
//             selection = itmes[0];
//             for (i of items.slice(items.indexOf(playerClicked)))
//                 virtualBoard.push(i);
//             for (i of items.slice(items.indexOf(0, playerClicked))) {
//                 virtualBoard.push(i);
//             }
//         }
//     }
// }
//     else {
//     switch (beatSelector) {
//         case 0:
//             // const checker = clicked.join('');
//             if (greenClicked[1] == virtualBoard[8]) {
//                 if (redClicked.length == 1) {
//                     redClicked.push(virtualBoard[3])
//                 }
//                 else {
//                     if (greenClicked[2] == virtualBoard[5]) {
//                         if (redClicked.length == 2) {
//                             redClicked.push(virtualBoard[2]);
//                         }
//                         else {
//                             if (greenClicked[4] == virtualBoard[6]) {
//                                 if (greenClicked[5] == virtualBoard[7]) {

//                                 }
//                                 else {
//                                     redClicked.push(virtualBoard[7])
//                                 }
//                             }
//                             else {
//                                 redClicked.push(virtualBoard[6])
//                             }
//                         }
//                     }
//                     else {
//                         redClicked.push(virtualBoard[5])
//                     }
//                 }
//                 else {
//                     redClicked.push(virtualBoard[3])
//                 }

//             }
//     }
// }


// const hardComp = function () {

//     const playerClicked = clicked[clicked.length - 1];

//     if ((!beatSelector) && ([items[0], items[2], items[6], items[8]].includes(playerClicked))) {
//         beatSelector = 0;
//     }
//     if ((!beatSelector) && (playerClicked == items[4])) {
//         beatSelector = 1;
//     }
//     if ((!beatSelector) && ([items[1], items[3], items[5], items[7]].includes(playerClicked))) {
//         beatSelector = 2;

//         medBrain(playerClicked, beatSelector, selection);



//     }
// }

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
    resetIt(x);
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
                setTimeout(dumbComp, 100);
                changeTurn();
                break;
            case 'medium':
                // setTimeout(medComp, 100)
                medComp()
                changeTurn()
                break;

        }
    }
    if (!gameStatus()) {
        switch (selectPlayer) {
            case 0:
                score1++;
                break;
            case 1:
                score2++;
                break;
            case 2:
                scoretie++
                break;
        }
        setTimeout(announceIt, 100);
        scoring(score1, score2, scoretie)

    }
    console.log('leave gamePlay')

}

const playIt = function () {
    window.location.href = '#cont'
}

playagain.addEventListener('click', playIt);
resetIt('y');
console.log('scoreing 2', score1)


//     const namingPlayers = function () {
//     if (gameStyle[selectStyle] == 'human') {
//         playerOne = prompt('Green Player Name') || 'Player One';
//         playerTwo = prompt('Red Player Name');
//     }
//     else {
//         playerOne = prompt('Green Player Name');
//         playerTwo = gameStyle[selectStyle].slice(0, 1).toUpperCase() + gameStyle[selectStyle].slice(1) + ' Difficulity Computer';
//     }
//     document.querySelector('.name1').innerText = playerOne;
//     document.querySelector('.name2').innerText = playerTwo;
// } ();
const scoring = function (score1 = 0, score2 = 0, scoretie = 0) {
    console.log(score1, 'score1');
    result1.innerText = 'Win ' + score1;
    result2.innerText = 'Win ' + score2;
    tie.innerText = 'tie ' + scoretie;

};
scoring();


// const tictactoe = document.querySelector('.tictactoe');
// let c = 1;
// const glow = function () {

//     tictactoe.className = 'tictactoe glow' + c;
//     if (c == 5) {
//         c = 0
//     }
//     c++
//     console.log('glow', c)
// }
// let d = 0
// while (d < 20) {
//     d++
//     setTimeout(glow(), 10000)
//     // setTimeglow();
//     console.log('while')
// }
const startButton = document.querySelector('.start');
const addShadow1 = function () {
    startButton.className += ' shadow1'

}
const addShadow2 = function () {
    startButton.className = 'start shadow2'

}
const removeGlow = function () {
    startButton.className = 'start'
    setTimeout(addShadow1, 100);
    setTimeout(addShadow2, 200);
    setTimeout(function () { startButton.className = 'start shadow3' }, 380)
    setTimeout(function () {
        window.location.href = '#cont'
    }, 600)
    setTimeout(function () {
        startButton.className = 'start glow'
    }, 1000);

    // addShadow1()
}

startButton.addEventListener('click', removeGlow);
// startButton.addEventListener('click', )
const compButtons = document.querySelectorAll('.com');
const thenames2 = document.querySelector('.thenames2');



const showIt = function () {
    thenames2.className = "thenames2 showIt";


}
const hideIt = function () {
    thenames2.className = "thenames2 hideIt";



}
for (i of compButtons) {
    i.addEventListener('click', hideIt);
}

const humanButton = document.querySelector('.hue')
humanButton.addEventListener('click', showIt);
