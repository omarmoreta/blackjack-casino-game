//Each hand for the dealer and player
const dealerHand = [];
const playerHand = [];

//Player and dealer result display
const playerResult = document.getElementById("player-result");
const dealerResult = document.getElementById("dealer-result");

//Shuffles the deck once the game begins
function shuffle() {
  cards.sort(() => Math.random() - 0.5);
}

//Deal cards to both the dealer and player
function getCard() {
  let card = cards.shift();
  cards.push(card);
  return card;
}

//Cards for the dealer pushed to the hand array and updates score
function dealToDealer() {
  let dealer = document.getElementById("dealer-hand");
  let dealerCard = document.createElement("img");
  let newCard = getCard();
  dealerCard.src = newCard.url;
  dealerCard.style.width = "170px";
  dealerCard.style.height = "220px";
  dealerCard.style.margin = "10px";
  dealerCard.style.boxShadow = "1px 1px 1px 2px orange";
  dealer.append(dealerCard);
  dealerHand.push(newCard);
  updateDealer();
}

//Cards for the player pushed to hand and updates score
function dealToPlayer() {
  let playerUi = document.getElementById("player-hand");
  let playerCard = document.createElement("img");
  let newCard = getCard();
  playerCard.src = newCard.url;
  playerCard.style.width = "170px";
  playerCard.style.height = "220px";
  playerCard.style.margin = "10px";
  playerCard.style.boxShadow = "1px 1px 1px 2px orange";
  playerUi.append(playerCard);
  playerHand.push(newCard);
  updatePlayer();
}

//Updates the dealer result from previous hand to new score
function updateDealer() {
  let dealerScore = document.getElementById("dealer-score");
  let dealerTotal = dealerHand
    .map((card) => card.value)
    .reduce((lastCard, newCard) => lastCard + newCard, 0);
  dealerScore.textContent = "Total: " + dealerTotal;
  if (dealerTotal === 21) {
    dealerResult.textContent = "Dealer has BlackJack!";
  }
  return dealerTotal;
}

//Updates the player result from previous hand to new score
function updatePlayer() {
  let playerScore = document.getElementById("player-score");
  let playerTotal = playerHand
    .map((card) => card.value)
    .reduce((lastCard, newCard) => lastCard + newCard, 0);
  playerScore.textContent = "Total: " + playerTotal;
  if (playerTotal === 21) {
    playerResult.textContent = "Player has BlackJack!";
  }
  return playerTotal;
}

//Start game function that will be added to a button onclick
function startGame() {
  document.getElementById("rules").style.display = "none";
  document.getElementById("dealer").textContent = "Dealer Hand";
  document.getElementById("dealer-score").textContent = "Dealer Score";
  document.getElementById("player").textContent = "Player Hand";
  document.getElementById("player-score").textContent = "Player Score";
  let startBtn = document.getElementById("start-btn");
  startBtn.setAttribute("onclick", "startNewGame()");
  startBtn.style.display = "none";
  shuffle();
  dealToDealer();
  dealToDealer();
  dealToPlayer();
  dealToPlayer();
  checkAces();
  createButtons();
}

//Function to create two buttons after the start of the game
function createButtons() {
  hitBtn();
  stayBtn();
}

//Hide the buttons to transition between start and new games
function hideButtons() {
  let hitBtn = document.getElementById("hit-btn");
  let stayBtn = document.getElementById("stay-btn");
  hitBtn.removeAttribute("class");
  hitBtn.setAttribute("hidden", "true");
  stayBtn.removeAttribute("class");
  stayBtn.setAttribute("hidden", "true");
}

//Hit button for the player to draw from the deck
function hitBtn() {
  let hitBtn = document.getElementById("hit-btn");
  hitBtn.removeAttribute("hidden");
  hitBtn.classList.add("button");
  hitBtn.textContent = "Hit";
  hitBtn.addEventListener("click", () => {
    dealToPlayer();
    checkAces();
    if (updatePlayer() > 21) {
      playerResult.innerText = "Player LOST, BUSTED!";
      let newGame = document.getElementById("start-btn");
      newGame.style.display = "";
      newGame.setAttribute("onclick", "startNewGame()");
      hideButtons();
    }
  });
}

//Stay button for the player to stand on the hand
function stayBtn() {
  let stayBtn = document.getElementById("stay-btn");
  stayBtn.removeAttribute("hidden");
  stayBtn.classList.add("button");
  stayBtn.textContent = "Stay";
  stayBtn.addEventListener("click", () => {
    dealerPlay();
    checkAces();
    checkWinner();
    hideButtons();
  });
}

//Continues to deal to the dealer if 17 has not been reached
function dealerPlay() {
  if (updateDealer() < 17) {
    dealToDealer();
    checkAces();
    if (updateDealer() < 17) {
      dealToDealer();
      checkAces();
      if (updateDealer() < 17) {
        dealToDealer();
        checkAces();
      }
    }
  }
}

//Checks the player and dealer results and displays the outcome
function checkWinner() {
  if (updatePlayer() > 21) {
    dealerResult.innerText = "Player LOST";
    playerResult.innerText = "Player BUSTED";
  } else if (updateDealer() > 21) {
    playerResult.innerText = "Player WINS";
    dealerResult.innerText = "Dealer BUSTED";
  } else if (updateDealer() === 21 && updatePlayer() === 21) {
    dealerResult.innerText = "Dealer and Player have BlackJack";
    playerResult.innerText = "PUSH: Dealer and Player Tied";
  } else if (updateDealer() === 21 && updateDealer() > updatePlayer()) {
    dealerResult.innerText = "Player LOST";
    playerResult.innerText = "Dealer has BlackJack";
  } else if (updatePlayer() === 21 && updatePlayer() > updateDealer()) {
    playerResult.innerText = "Player WINS";
    dealerResult.innerText = "Player has BlackJack";
  } else if (updatePlayer() === updateDealer()) {
    dealerResult.innerText = "PUSH";
    playerResult.innerText = "Dealer and Player Tied";
  } else if (updatePlayer() > updateDealer()) {
    dealerResult.innerText = "Player WINS";
    playerResult.innerText = "Player Hand is Greater";
  } else if (updatePlayer() < updateDealer()) {
    dealerResult.innerText = "Player LOST";
    playerResult.innerText = "Dealer Hand is Greater";
  }
  let newGame = document.getElementById("start-btn");
  newGame.style.display = "";
  newGame.removeAttribute("onclick");
  newGame.setAttribute("onclick", "startNewGame()");
}

//Check for Aces and changes the value to 1 if more than one Ace in Hand
function checkAces() {
  for (let i = 0; i < playerHand.length; i++) {
    if (updatePlayer() > 21) {
      if (playerHand[i].value === 11) {
        playerHand[i].value = 1;
      }
    }
  }
  for (let i = 0; i < dealerHand.length; i++) {
    if (updateDealer() > 21) {
      if (dealerHand[i].value === 11) {
        dealerHand[i].value = 1;
      }
    }
  }
}

//Starts a new game from scratch
function startNewGame() {
  location.reload();
}

//Add music to the game with play/pause controls
let firstSong = document.getElementById("first-song");
let secondSong = document.getElementById("second-song");
let play = document.getElementById("play");
let next = document.getElementById("next");

play.addEventListener("click", () => {
  if (firstSong.paused && secondSong.paused) {
    secondSong.pause();
    firstSong.play();
    play.className = "fa fa-circle-o-notch fa-spin";
    next.className = "fa fa-pause";
  } else if (firstSong.play()) {
    secondSong.pause();
    firstSong.pause();
    play.className = "fa fa-pause";
    next.className = "fa fa-angle-double-right";
  } else if (secondSong.play()) {
    firstSong.pause();
    secondSong.pause();
    play.className = "fa fa-pause";
    next.className = "fa fa-pause";
  }
});

next.addEventListener("click", () => {
  if (secondSong.paused && firstSong.paused) {
    firstSong.pause();
    secondSong.play();
    next.className = "fa fa-circle-o-notch fa-spin";
    play.className = "fa fa-pause";
  } else if (secondSong.play()) {
    firstSong.pause();
    secondSong.pause();
    next.className = "fa fa-pause";
    play.className = "fa fa-pause";
  } else if (firstSong.play()) {
    firstSong.pause();
    secondSong.pause();
    play.className = "fa fa-pause";
    next.className = "fa fa-pause";
  }
});
