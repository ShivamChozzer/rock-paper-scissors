let score = JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();


function playGame(playerMove){
  let computerMove = pickComputerMove();
  let result = '';
  if(playerMove === 'Rock'){
    
    if(computerMove === 'Rock'){
      result = 'Tie.';
    }
    else if(computerMove === 'Paper'){
      result = 'You Lose.'
    }
    else if(computerMove === 'Scissors'){
      result = 'You Win.';
    }

  }

  else if(playerMove === 'Paper'){

    if(computerMove === 'Rock'){
      result = 'You Win.';
    }
    else if(computerMove === 'Paper'){
      result = 'Tie.'
    }
    else if(computerMove === 'Scissors'){
      result = 'You Lose.';
    }

  }

  else if(playerMove === 'Scissors'){

    if(computerMove === 'Rock'){
      result = 'You Lose.';
    }
    else if(computerMove === 'Paper'){
      result = 'You Win.'
    }
    else if(computerMove === 'Scissors'){
      result = 'Tie.';
    }
    
  }
  if(result === 'You Win.'){
    score.wins += 1;
  }
  else if(result === 'You Lose.'){
    score.losses += 1;
  }
  else if(result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  showResult(result);
  showMoves(playerMove, computerMove);
  updateScoreElement();
}

function showResult(result){
  document.querySelector('.js-result').innerHTML = result;
}

function showMoves(playerMove, computerMove){
  document.querySelector('.js-moves').innerHTML = 

  `You
  <img class="move-icon" src="rock-paper-scissor-images/${playerMove.toLowerCase()}-emoji.png">
  <img class="move-icon" src="rock-paper-scissor-images/${computerMove.toLowerCase()}-emoji.png">
  PC1`
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}

function getRandom(min, max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  const range = max - min + 1;
  return (array[0] % range) + min;
}

function pickComputerMove(){
  let randomNumber = getRandom(1, 3);
  let computerMove = '';
  switch (randomNumber) {
    case 1: computerMove = 'Rock'; break;
    case 2: computerMove = 'Paper'; break;
    case 3: computerMove = 'Scissors'; break;
  }

  return computerMove;
}
