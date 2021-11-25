//Create a deck of cards with 4 suit and 13 values, 52 cards total
let suit = ["hearts", "diamonds", "spades", "clubs"];
let value = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Joker", "Queen", "King"];
let deck = [];
let dealerHand = [];
let playerHand = [];

function createCards() {
  for (let s = 0; s < suit.length; s++) {
    for (let v = 0; v < value.length; v++) {
      deck.push(value[v] + " " + "of" + " " + suit[s]);
      if (value[v] === "Ace") {
        value[v] = 11;
      }
      if (value[v] === "Joker" || "Queen" || "King") {
        value[v] = 10;
      }
    }
  }
  return deck;
}
console.log(createCards());

//Create a function to shuffle the deck
function shuffle(deck) {
  deck.sort(() => Math.random() - 0.5);
}

shuffle(deck);
console.log(deck);

//Create dealer draw
function dealerDraw() {
  let dealer = document.getElementById("dealer");
  let dealerCard = document.createElement("div");
  let randomCard = deck[Math.floor(Math.random() * deck.length)];
  dealerCard.innerHTML = randomCard;
  dealer.append(dealerCard);
  dealerHand.push(randomCard);
  deck.pop(randomCard);
  updateDealer();
  return dealer;
}

//Create player draw
function playerDraw() {
  let player = document.getElementById("player");
  let playerCard = document.createElement("div");
  let randomCard = deck[Math.floor(Math.random() * deck.length)];
  playerCard.innerHTML = randomCard;
  player.append(playerCard);
  playerHand.push(randomCard);
  deck.pop(randomCard);
  updatePlayer();
  return player;
}

dealerDraw();
playerDraw();

//Hit and Stay
let hitBtn = document.getElementById("hit-btn");
hitBtn.addEventListener("click", () => {
  playerDraw();
  updatePlayer();
});

let stayBtn = document.getElementById("stay-btn");
stayBtn.addEventListener("click", () => {
  dealerDraw();
  updateDealer();
});

function updateDealer() {
  let dealerScore = document.getElementById("dealer-score");
  for (let i = 0; i < dealerHand.length; i++) {
    dealerScore.innerHTML = dealerHand;
  }
}

function updatePlayer() {
  let playerScore = document.getElementById("player-score");
  for (let i = 0; i < playerHand.length; i++) {
    playerScore.innerHTML = playerHand;
  }
}
