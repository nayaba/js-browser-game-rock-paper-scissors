/*------------ Constants ---------------*/
const choices = ['rock', 'paper', 'scissors']

/*------------ Variables ---------------*/
let playerChoice
let computerChoice
let msg

/*------ Cached Element References -----*/
const resultDisplayEl = document.querySelector('#result-display')
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const resetBtn = document.querySelector('#resetButton')

/*------------ Functions ---------------*/
const compare = () => {
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        msg = `You chose ${playerChoice} and the computer chose ${computerChoice}. The computer wins!`
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        msg = `You chose ${playerChoice} and the computer chose ${computerChoice}. The computer wins!`
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        msg = `You chose ${playerChoice} and the computer chose ${computerChoice}. The computer wins!`
    } else if (playerChoice === computerChoice) {
        msg = `You chose ${playerChoice} and the computer chose ${computerChoice}. It's a tie!`
    } else {
        msg = `You chose ${playerChoice} and the computer chose ${computerChoice}. You win!`
    }
    // render(msg)
}

const getComputerChoice = () => {
    let index = Math.floor(Math.random() * 3)
    computerChoice = choices[index]
}

const getPlayerChoice = (event) => {
    playerChoice = event.target.id
}

const render = () => {
    resultDisplayEl.textContent = msg
}

const play = (event) => {
    getPlayerChoice(event)
    getComputerChoice()
    compare()
    render()
}

const resetGame = () => {
    playerChoice = null
    computerChoice = null
    resultDisplayEl.textContent = ''
}

/*----------- Event Listeners ----------*/
rockBtn.addEventListener('click', play)
paperBtn.addEventListener('click', play)
scissorsBtn.addEventListener('click', play)
resetBtn.addEventListener('click', resetGame)

