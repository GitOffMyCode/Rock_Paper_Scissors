// GET USER RESPONSE
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question('Please choose either rock, paper or scissors:\n', handleUserResponse)

// MAIN GAME FUNCTION
function handleUserResponse (response) {
  readline.close();

  response = response.toLowerCase();

  // CHECK USER RESPONSE IS VALID
  if (response !== 'rock' && response !== 'paper' && response !== 'scissors') {
    console.log('invalid response');
    return;
  }

  // GET COMPUTER RANDOM CHOICE
  let compRandom =  Math.floor(Math.random() * 3);
  let compChoice;
    if (compRandom === 0) compChoice = 'scissors';
    if (compRandom === 1) compChoice = 'paper';
    if (compRandom === 2) compChoice = 'rock';
  
  // TELL USER OUTCOME
  console.log(`You selected ${response}. The computer selected ${compChoice}...`);
  if (compChoice === response) {
      console.log('It\'s a draw!');
  }
  if (compChoice === 'rock' && response === 'scissors') {
      console.log('rock beats scissors - computer wins!');
  }
  if (compChoice === 'rock' && response === 'paper') {
      console.log('paper beats rock - you win!');
  }
  if (compChoice === 'scissors' && response === 'paper') {
      console.log('scissors beats paper - computer wins!');
  }
  if (compChoice === 'scissors' && response === 'rock') {
      console.log('rock beats scissors - you win!');
  }
  if (compChoice === 'paper' && response === 'rock') {
      console.log('paper beats rock - computer wins!');
  }
  if (compChoice === 'paper' && response === 'scissors') {
      console.log('scissors beat paper - you win!');
  } 

}








