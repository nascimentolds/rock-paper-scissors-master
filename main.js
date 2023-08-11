// Open rules
const rulesBt = document.querySelector('.rules-bt');
const closeBt = document.querySelector('.close-bt');
const modal = document.querySelector('.rules');
const winBox = document.querySelector('.win');
const winMessage = document.querySelector('.win-message');
var score = document.querySelector('.score');

rulesBt.addEventListener('click', () => {
  modal.style.display = 'flex';
})

closeBt.addEventListener('click', () => {
  modal.style.display = 'none';
})

// Game
const options = document.querySelectorAll('.options');
const opcoes = document.querySelector('.opcoes');
const game = document.querySelector('.game');
const paper = document.querySelector('.paper');

var playerChosse = document.querySelector('.player-choose');
var houseChosse = document.querySelector('.house-choose');

options.forEach(option => {
  option.addEventListener('click', () => {
    game.style.display = 'block';
    opcoes.style.display = 'none';

    playerPicked(option.id);
    var housePick = Math.floor(Math.random() * 3);
    housePicked(housePick);

    var winner = win(option.id, housePick);
        
    setTimeout(() => {
      winBox.style.display = 'flex';
      score.innerHTML = winPlayer + winHouse;
      winMessageDisplay(winner);
    }, 1000); 
  });
})

// win
let winPlayer = 0
let winHouse = 0
function win(p1, p2) {
  if (p2 == 0 && p1 == 1 || p2 == 1 && p1 == 2 || p2 == 2 && p1 == 0) {
    winPlayer++
    return "winner";
  }
  if (p1 == 0 && p2 == 1 || p1 == 1 && p2 == 2 || p1 == 2 && p2 == 0) {
    winHouse--
    return "loser";
  }
}

function winMessageDisplay(win) {
  if (win == "winner") {
    winMessage.innerHTML = "YOU WIN";
    playerChosse.classList.add("winner");
  } else if (win == "loser") {
    winMessage.innerHTML = "YOU LOSE";
    houseChosse.classList.add("winner");
  } else {
    winMessage.innerHTML = "DRAW";
  }
}

// options
function playerPicked(player) {
  if (player == 0) {
    return playerChosse.innerHTML = "<div class='border border-paper'><div class='button'><img src='./images/icon-paper.svg' alt='paper' class='img-paper' /></div></div>"
  }
  if (player == 1) {
    return playerChosse.innerHTML = "<div class='border border-scissors'><div class='button'><img src='./images/icon-scissors.svg' alt='scissors' class='img-scissors' /></div></div>"
  }
  if (player == 2) {
    return playerChosse.innerHTML = "<div class='border border-rock'><div class='button'><img src='./images/icon-rock.svg' alt='rock' class='img-rock' /></div></div>"
  }
}

function housePicked(house) {
  if (house == 0) {
    return setTimeout(function () {
      houseChosse.innerHTML = "<div class='border border-paper'><div class='button'><img src='./images/icon-paper.svg' alt='paper' class='img-paper' /></div></div>"
    }, 700);
  }
  if (house == 1) {
    return setTimeout(function () {
      houseChosse.innerHTML = "<div class='border border-scissors'><div class='button'><img src='./images/icon-scissors.svg' alt='scissors' class='img-scissors' /></div></div>"
    }, 700);
  }
  if (house == 2) {
    return setTimeout(function () {
      houseChosse.innerHTML = "<div class='border border-rock'><div class='button'><img src='./images/icon-rock.svg' alt='rock' class='img-rock' /></div></div>"
    }, 700);
  }
}

// New game
const winBtn = document.querySelector(".win-bt");

winBtn.addEventListener('click', () => {
  game.style.display = 'none';
  opcoes.style.display = 'block';
  houseChosse.innerHTML = '<div class="hide-choose"></div>';
  winBox.style.display = 'none';
  playerChosse.classList.remove('winner');
  houseChosse.classList.remove('winner');
})
