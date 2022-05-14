import { cards } from "./deck.js"

//Each hand for the dealer and player
const dealerHand: any[] = [];
const playerHand: any[] = [];

//Player and dealer result display
const playerResult: HTMLElement = document.getElementById("player-result");
const dealerResult: HTMLElement = document.getElementById("dealer-result");

//Shuffles the deck once the game begins
function shuffle(): void {
  cards.sort(() => Math.random() - 0.5);
}

//Deal cards to both the dealer and player
function getCard() {
  let card = cards.shift();
  cards.push(card);
  return card;
}

//Cards for the dealer pushed to the hand array and updates score
function dealToDealer(): void {
  let dealerUi: HTMLElement = document.getElementById("dealer-hand");
  let dealerCard: HTMLImageElement = document.createElement("img");
  let newCard = getCard();
  dealerCard.src = newCard.url;
  dealerCard.style.width = "170px";
  dealerCard.style.height = "220px";
  dealerCard.style.margin = "10px";
  dealerCard.style.boxShadow = "1px 1px 1px 2px orange";
  dealerUi.append(dealerCard);
  dealerHand.push(newCard);
  updateDealer();
}

//Cards for the player pushed to hand and updates score
function dealToPlayer(): void {
  let playerUi: HTMLElement = document.getElementById("player-hand");
  let playerCard: HTMLImageElement = document.createElement("img");
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
function updateDealer(): any {
  let dealerScore: HTMLElement = document.getElementById("dealer-score");
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
function updatePlayer(): any {
  let playerScore: HTMLElement = document.getElementById("player-score");
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
function startGame(): void {
  document.getElementById("rules").style.display = "none";
  document.getElementById("dealer").textContent = "Dealer Hand";
  document.getElementById("dealer-score").textContent = "Dealer Score";
  document.getElementById("player").textContent = "Player Hand";
  document.getElementById("player-score").textContent = "Player Score";
  let startBtn: HTMLElement = document.getElementById("start-btn");
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
function createButtons(): void {
  hitBtn();
  stayBtn();
}

//Hide the buttons to transition between start and new games
function hideButtons(): void {
  let hitBtn: HTMLElement = document.getElementById("hit-btn");
  let stayBtn: HTMLElement = document.getElementById("stay-btn");
  hitBtn.removeAttribute("class");
  hitBtn.setAttribute("hidden", "true");
  stayBtn.removeAttribute("class");
  stayBtn.setAttribute("hidden", "true");
}

//Hit button for the player to draw from the deck
function hitBtn(): void {
  let hitBtn: HTMLElement = document.getElementById("hit-btn");
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
function stayBtn(): void {
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
function dealerPlay(): void {
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
function checkWinner(): void {
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
  let newGame: HTMLElement = document.getElementById("start-btn");
  newGame.style.display = "";
  newGame.setAttribute("onclick", "startNewGame()");
}

//Check for Aces and changes the value to 1 if more than one Ace in Hand
function checkAces(): void {
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
function startNewGame(): void {
  location.reload();
}

//Add music to the game with play/pause controls
let firstSong: any = document.getElementById("first-song");
let secondSong: any = document.getElementById("second-song");
let play: any = document.getElementById("play");
let next: any = document.getElementById("next");

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
    play.className = "fa fa-play";
  } else if (firstSong.play()) {
    firstSong.pause();
    secondSong.pause();
    play.className = "fa fa-play";
    next.className = "fa fa-pause";
  }
});
