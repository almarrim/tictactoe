TICTACTOE
This Game Was Created By Mohammed Almarri.
It is a project for GA Software Engineering Immersive program.

Technologies used:
-vscode
-chrome

User Stories:
-As a user, I am be able to start a new game
-As a user, I am be able to chose to play against a (human, easy computer, medium difficulty computer)
-As a user, I am be able to select X or O as my token.
-As a user, I am shown a (win, lose, tie) message 
-As a user, I can start a new game with a different difficulty
-As a user, I can continue playing games as long as desired
-As a user, I am able to play new games without refreshing
-As a user, I have different colors on the square I clicked that is different than my opponent but matches my info box
-As a user, I have a different token than my opponent
-As a user, I can't click on a square that had been clicked

Planning and development:
-starting with the basic html content(the board)
-using css to center and show the board
-in java script: it start by trying to test and link the moves of the mouse and the board
-then implemented a logic to switch turns and allow for two players.
-create a validation function to decide the winner
-then add reset and create a dumb AI. the point was mainly to simulate automation of second player and switching turns.
-medium difficulty computer algorithm was created. It was mainly defensive. it can only see one step ahead. it would select the last square that would make the opponent win.
-the medium difficulty was improved to include an active approach and try to selects what would make it win first. then try to defend by selecting what would prevent the opponent from winning.
-a separate html page was created to allow a user to selected game style. details like name selection, and some css were made.
-page layout was develop to be a one page only and use a parallax style.
-java script was modified to adopt to the changes made for the styling.


Solving for the winner:
-There are 8 winning lines. there are two arrays for the clicked squares by each player. the function would check if one of the arrays(one of the players) has any of the winning lines.
-Also, there is an array for all the clicked squares. Therefore, if there is no winner, it would check if all the 9 squares had been clicked.
- Therefore, it would allow the continuation or return the results to the gamePlay function.
