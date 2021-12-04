//A deck of cards to use for the game
const cards = [
  {
    name: "Ace of Clubs",
    value: 11,
    url: "assets/Ace-clubs.png",
  },
  {
    name: "Ace of Diamonds",
    value: 11,
    url: "assets/Ace-diamonds.png",
  },
  {
    name: "Ace of Hearts",
    value: 11,
    url: "assets/Ace-hearts.png",
  },
  {
    name: "Ace of Spades",
    value: 11,
    url: "assets/Ace-spades.png",
  },
  {
    name: "Two of Clubs",
    value: 2,
    url: "assets/Two-clubs.png",
  },
  {
    name: "Two of Diamonds",
    value: 2,
    url: "assets/Two-diamonds.png",
  },
  {
    name: "Two of Hearts",
    value: 2,
    url: "assets/Two-hearts.png",
  },
  {
    name: "Two of Spades",
    value: 2,
    url: "assets/Two-spades.png",
  },
  {
    name: "Three of Clubs",
    value: 3,
    url: "assets/Three-clubs.png",
  },
  {
    name: "Three of Diamonds",
    value: 3,
    url: "assets/Three-diamonds.png",
  },
  {
    name: "Three of Hearts",
    value: 3,
    url: "assets/Three-hearts.png",
  },
  {
    name: "Three of Spades",
    value: 3,
    url: "assets/Three-spades.png",
  },
  {
    name: "Four of Clubs",
    value: 4,
    url: "assets/Four-clubs.png",
  },
  {
    name: "Four of Diamonds",
    value: 4,
    url: "assets/Four-diamonds.png",
  },
  {
    name: "Four of Hearts",
    value: 4,
    url: "assets/Four-hearts.png",
  },
  {
    name: "Four of Spades",
    value: 4,
    url: "assets/Four-spades.png",
  },
  {
    name: "Five of Clubs",
    value: 5,
    url: "assets/Five-clubs.png",
  },
  {
    name: "Five of Diamonds",
    value: 5,
    url: "assets/Five-diamonds.png",
  },
  {
    name: "Five of Hearts",
    value: 5,
    url: "assets/Five-hearts.png",
  },
  {
    name: "Five of Spades",
    value: 5,
    url: "assets/Five-spades.png",
  },
  {
    name: "Six of Clubs",
    value: 6,
    url: "assets/Six-clubs.png",
  },
  {
    name: "Six of Diamonds",
    value: 6,
    url: "assets/Six-diamonds.png",
  },
  {
    name: "Six of Hearts",
    value: 6,
    url: "assets/Six-hearts.png",
  },
  {
    name: "Six of Spades",
    value: 6,
    url: "assets/Six-spades.png",
  },
  {
    name: "Seven of Clubs",
    value: 7,
    url: "assets/Seven-clubs.png",
  },
  {
    name: "Seven of Diamonds",
    value: 7,
    url: "assets/Seven-diamonds.png",
  },
  {
    name: "Seven of Hearts",
    value: 7,
    url: "assets/Seven-hearts.png",
  },
  {
    name: "Seven of Spades",
    value: 7,
    url: "assets/Seven-spades.png",
  },
  {
    name: "Eight of Clubs",
    value: 8,
    url: "assets/Eight-clubs.png",
  },
  {
    name: "Eight of Diamonds",
    value: 8,
    url: "assets/Eight-diamonds.png",
  },
  {
    name: "Eight of Hearts",
    value: 8,
    url: "assets/Eight-hearts.png",
  },
  {
    name: "Eight of Spades",
    value: 8,
    url: "assets/Eight-spades.png",
  },
  {
    name: "Nine of Clubs",
    value: 9,
    url: "assets/Nine-clubs.png",
  },
  {
    name: "Nine of Diamonds",
    value: 9,
    url: "assets/Nine-diamonds.png",
  },
  {
    name: "Nine of Hearts",
    value: 9,
    url: "assets/Nine-hearts.png",
  },
  {
    name: "Nine of Spades",
    value: 9,
    url: "assets/Nine-spades.png",
  },
  {
    name: "Ten of Clubs",
    value: 10,
    url: "assets/Ten-clubs.png",
  },
  {
    name: "Ten of Diamonds",
    value: 10,
    url: "assets/Ten-diamonds.png",
  },
  {
    name: "Ten of Hearts",
    value: 10,
    url: "assets/Ten-hearts.png",
  },
  {
    name: "Ten of Spades",
    value: 10,
    url: "assets/Ten-spades.png",
  },
  {
    name: "Jack of Clubs",
    value: 10,
    url: "assets/Jack-clubs.png",
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    url: "assets/Jack-diamonds.png",
  },
  {
    name: "Jack of Hearts",
    value: 10,
    url: "assets/Jack-hearts.png",
  },
  {
    name: "Jack of Spades",
    value: 10,
    url: "assets/Jack-spades.png",
  },
  {
    name: "Queen of Clubs",
    value: 10,
    url: "assets/Queen-clubs.png",
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    url: "assets/Queen-diamonds.png",
  },
  {
    name: "Queen of Hearts",
    value: 10,
    url: "assets/Queen-hearts.png",
  },
  {
    name: "Queen of Spades",
    value: 10,
    url: "assets/Queen-spades.png",
  },
  {
    name: "King of Clubs",
    value: 10,
    url: "assets/King-clubs.png",
  },
  {
    name: "King of Diamonds",
    value: 10,
    url: "assets/King-diamonds.png",
  },
  {
    name: "King of Hearts",
    value: 10,
    url: "assets/King-hearts.png",
  },
  {
    name: "King of Spades",
    value: 10,
    url: "assets/King-spades.png",
  },
];

//Each hand for the dealer and player
let dealerHand = [];
let playerHand = [];

//Player and dealer result display
let playerResult = document.getElementById("player-result");
let dealerResult = document.getElementById("dealer-result");

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
  dealerCard.style.width = "150px";
  dealerCard.style.height = "200px";
  dealerCard.style.margin = "10px";
  dealer.append(dealerCard);
  dealerHand.push(newCard);
  updateDealer();
}

//Cards for the player pushed to hand and updates score
function dealToPlayer() {
  let player = document.getElementById("player-hand");
  let playerCard = document.createElement("img");
  let newCard = getCard();
  playerCard.src = newCard.url;
  playerCard.style.width = "150px";
  playerCard.style.height = "200px";
  playerCard.style.margin = "10px";
  player.append(playerCard);
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
  document.getElementById("start-btn").style.display = "none";
  shuffle();
  dealToDealer();
  dealToDealer();
  dealToPlayer();
  dealToPlayer();
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
    checkAces();
    dealToPlayer();
    if (updatePlayer() > 21) {
      playerResult.innerText = "Player LOST, BUSTED!";
      let newGame = document.getElementById("start-btn");
      newGame.style.display = "";
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
    checkAces();
    dealerPlay();
    checkWinner();
    hideButtons();
  });
}

//Continues to deal to the dealer if 17 has not been reached
function dealerPlay() {
  if (updateDealer() < 17) {
    dealToDealer();
    if (updateDealer() < 17) {
      dealToDealer();
      if (updateDealer() < 17) {
        dealToDealer();
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
    if (playerHand[i].value === 11 && updatePlayer < 21) {
      playerHand[i] = 1;
    }
  }
  for (let i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i].value === 11 && updatePlayer < 21) {
      dealerHand[i] = 1;
    }
  }
}

//Clears the game to get ready for a new game with no hands
function clearGame() {
  // for (let i = 0; i < playerHand.length; i++) {
  //   playerHand[i].pop();
  // }
  // for (let i = 0; i < dealerHand.length; i++) {
  //   dealerHand[i].pop();
  // }
  document.getElementById("dealer-hand").remove();
  document.getElementById("player-hand").remove();
  playerHand.length = 0;
  dealerHand.length = 0;
  // let dealer = updateDealer();
  // dealer = 0;
  // let player = updatePlayer();
  // player = 0;
}
//Cards for the dealer pushed to the hand array and updates score for the new game
function newDealToDealer() {
  let dealer = document.getElementById("new-dealer-hand");
  let dealerCard = document.createElement("img");
  let newCard = getCard();
  dealerCard.src = newCard.url;
  dealerCard.style.width = "150px";
  dealerCard.style.height = "200px";
  dealerCard.style.margin = "10px";
  dealer.append(dealerCard);
  dealerHand.push(newCard);
  updateDealer();
}

//Cards for the player pushed to hand and updates score for the new game
function newDealToPlayer() {
  let player = document.getElementById("new-player-hand");
  let playerCard = document.createElement("img");
  let newCard = getCard();
  playerCard.src = newCard.url;
  playerCard.style.width = "150px";
  playerCard.style.height = "200px";
  playerCard.style.margin = "10px";
  player.append(playerCard);
  playerHand.push(newCard);
  updatePlayer();
}

//Starts a new game from scratch
function startNewGame() {
  clearGame();
  document.getElementById("dealer").textContent = "Dealer Hand";
  document.getElementById("dealer-score").textContent = "Dealer Score";
  document.getElementById("player").textContent = "Player Hand";
  document.getElementById("player-score").textContent = "Player Score";
  document.getElementById("start-btn").style.display = "none";
  shuffle();
  newDealToDealer();
  newDealToDealer();
  newDealToPlayer();
  newDealToPlayer();
  createButtons();
}
