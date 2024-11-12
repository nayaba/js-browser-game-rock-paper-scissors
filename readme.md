- As a user, I want to be able to easily click on one of the “Rock,” “Paper,” or “Scissors” buttons, so I can make my weapon choice for the game.

- As a user, I want visual feedback after making my selection, so I know my choice has been registered.

- As a user, I want to see the computer’s choice displayed next to mine, so I can compare the two.

- As a user, I want to be presented with a clear message indicating the winner of the game, so that I can immediately understand the outcome.

Need to create rock, paper, and scissor buttons.  Add eventlistener to button; need a variable to hold weapon choice; 

Create a results element; update element based on choice - use target to store weapon choice; create a function that will make a choice for the computer (need random number generator) - probably need an array to hold choices

Need a function to update the UI with the winner; need a function to compare choices and declare a winner


// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won
