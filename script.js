//A deck of cards to use for the game
const cards = [
  {
    name: "Ace of Clubs",
    value: 11,
    url: "assets/BlackJack-Cards/Ace-clubs.png",
  },
  {
    name: "Ace of Diamonds",
    value: 11,
    url: "assets/BlackJack-Cards/Ace-diamonds.png",
  },
  {
    name: "Ace of Hearts",
    value: 11,
    url: "assets/BlackJack-Cards/Ace-hearts.png",
  },
  {
    name: "Ace of Spades",
    value: 11,
    url: "assets/BlackJack-Cards/Ace-spades.png",
  },
  {
    name: "Two of Clubs",
    value: 2,
    url: "assets/BlackJack-Cards/Two-clubs.png",
  },
  {
    name: "Two of Diamonds",
    value: 2,
    url: "assets/BlackJack-Cards/Two-diamonds.png",
  },
  {
    name: "Two of Hearts",
    value: 2,
    url: "assets/BlackJack-Cards/Two-hearts.png",
  },
  {
    name: "Two of Spades",
    value: 2,
    url: "assets/BlackJack-Cards/Two-spades.png",
  },
  {
    name: "Three of Clubs",
    value: 3,
    url: "assets/BlackJack-Cards/Three-clubs.png",
  },
  {
    name: "Three of Diamonds",
    value: 3,
    url: "assets/BlackJack-Cards/Three-diamonds.png",
  },
  {
    name: "Three of Hearts",
    value: 3,
    url: "assets/BlackJack-Cards/Three-hearts.png",
  },
  {
    name: "Three of Spades",
    value: 3,
    url: "assets/BlackJack-Cards/Three-spades.png",
  },
  {
    name: "Four of Clubs",
    value: 4,
    url: "assets/BlackJack-Cards/Four-clubs.png",
  },
  {
    name: "Four of Diamonds",
    value: 4,
    url: "assets/BlackJack-Cards/Four-diamonds.png",
  },
  {
    name: "Four of Hearts",
    value: 4,
    url: "assets/BlackJack-Cards/Four-hearts.png",
  },
  {
    name: "Four of Spades",
    value: 4,
    url: "assets/BlackJack-Cards/Four-spades.png",
  },
  {
    name: "Five of Clubs",
    value: 5,
    url: "assets/BlackJack-Cards/Five-clubs.png",
  },
  {
    name: "Five of Diamonds",
    value: 5,
    url: "assets/BlackJack-Cards/Five-diamonds.png",
  },
  {
    name: "Five of Hearts",
    value: 5,
    url: "assets/BlackJack-Cards/Five-hearts.png",
  },
  {
    name: "Five of Spades",
    value: 5,
    url: "assets/BlackJack-Cards/Five-spades.png",
  },
  {
    name: "Six of Clubs",
    value: 6,
    url: "assets/BlackJack-Cards/Six-clubs.png",
  },
  {
    name: "Six of Diamonds",
    value: 6,
    url: "assets/BlackJack-Cards/Six-diamonds.png",
  },
  {
    name: "Six of Hearts",
    value: 6,
    url: "assets/BlackJack-Cards/Six-hearts.png",
  },
  {
    name: "Six of Spades",
    value: 6,
    url: "assets/BlackJack-Cards/Six-spades.png",
  },
  {
    name: "Seven of Clubs",
    value: 7,
    url: "assets/BlackJack-Cards/Seven-clubs.png",
  },
  {
    name: "Seven of Diamonds",
    value: 7,
    url: "assets/BlackJack-Cards/Seven-diamonds.png",
  },
  {
    name: "Seven of Hearts",
    value: 7,
    url: "assets/BlackJack-Cards/Seven-hearts.png",
  },
  {
    name: "Seven of Spades",
    value: 7,
    url: "assets/BlackJack-Cards/Seven-spades.png",
  },
  {
    name: "Eight of Clubs",
    value: 8,
    url: "assets/BlackJack-Cards/Eight-clubs.png",
  },
  {
    name: "Eight of Diamonds",
    value: 8,
    url: "assets/BlackJack-Cards/Eight-diamonds.png",
  },
  {
    name: "Eight of Hearts",
    value: 8,
    url: "assets/BlackJack-Cards/Eight-hearts.png",
  },
  {
    name: "Eight of Spades",
    value: 8,
    url: "assets/BlackJack-Cards/Eight-spades.png",
  },
  {
    name: "Nine of Clubs",
    value: 9,
    url: "assets/BlackJack-Cards/Nine-clubs.png",
  },
  {
    name: "Nine of Diamonds",
    value: 9,
    url: "assets/BlackJack-Cards/Nine-diamonds.png",
  },
  {
    name: "Nine of Hearts",
    value: 9,
    url: "assets/BlackJack-Cards/Nine-hearts.png",
  },
  {
    name: "Nine of Spades",
    value: 9,
    url: "assets/BlackJack-Cards/Nine-spades.png",
  },
  {
    name: "Ten of Clubs",
    value: 10,
    url: "assets/BlackJack-Cards/Ten-clubs.png",
  },
  {
    name: "Ten of Diamonds",
    value: 10,
    url: "assets/BlackJack-Cards/Ten-diamonds.png",
  },
  {
    name: "Ten of Hearts",
    value: 10,
    url: "assets/BlackJack-Cards/Ten-hearts.png",
  },
  {
    name: "Ten of Spades",
    value: 10,
    url: "assets/BlackJack-Cards/Ten-spades.png",
  },
  {
    name: "Jack of Clubs",
    value: 10,
    url: "assets/BlackJack-Cards/Jack-clubs.png",
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    url: "assets/BlackJack-Cards/Jack-diamonds.png",
  },
  {
    name: "Jack of Hearts",
    value: 10,
    url: "assets/BlackJack-Cards/Jack-hearts.png",
  },
  {
    name: "Jack of Spades",
    value: 10,
    url: "assets/BlackJack-Cards/Jack-spades.png",
  },
  {
    name: "Queen of Clubs",
    value: 10,
    url: "assets/BlackJack-Cards/Queen-clubs.png",
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    url: "assets/BlackJack-Cards/Queen-diamonds.png",
  },
  {
    name: "Queen of Hearts",
    value: 10,
    url: "assets/BlackJack-Cards/Queen-hearts.png",
  },
  {
    name: "Queen of Spades",
    value: 10,
    url: "assets/BlackJack-Cards/Queen-spades.png",
  },
  {
    name: "King of Clubs",
    value: 10,
    url: "assets/BlackJack-Cards/King-clubs.png",
  },
  {
    name: "King of Diamonds",
    value: 10,
    url: "assets/BlackJack-Cards/King-diamonds.png",
  },
  {
    name: "King of Hearts",
    value: 10,
    url: "assets/BlackJack-Cards/King-hearts.png",
  },
  {
    name: "King of Spades",
    value: 10,
    url: "assets/BlackJack-Cards/King-spades.png",
  },
];

//Each hand for the dealer and the player
let dealerHand = [];
let playerHand = [];

//Function to shuffle the deck once the game begins
function shuffle() {
  cards.sort(() => Math.random() - 0.5);
}

//Deal cards function to be used for both the dealer and player
function getCard() {
  let card = cards.shift();
  cards.push(card);
  return card;
}

//Cards for the dealer to display on the screen and push to the hand array
function dealToDealer() {
  let dealer = document.getElementById("dealer-hand");
  let dealerCard = document.createElement("img");
  let newCard = getCard();
  dealerCard.src = newCard.url;
  dealerCard.style.width = "150px";
  dealerCard.style.height = "200px";
  dealerCard.style.margin = "20px";
  dealer.append(dealerCard);
  dealerHand.push(newCard);
  updateDealer();
}

// //Cards for the player
function dealToPlayer() {
  let player = document.getElementById("player-hand");
  let playerCard = document.createElement("img");
  let newCard = getCard();
  playerCard.src = newCard.url;
  playerCard.style.width = "150px";
  playerCard.style.height = "200px";
  playerCard.style.margin = "20px";
  player.append(playerCard);
  playerHand.push(newCard);
  updatePlayer();
}

//Hit and Stay
let hitBtn = document.getElementById("hit-btn");
hitBtn.addEventListener("click", () => {
  dealToPlayer();
  updatePlayer();
});

let stayBtn = document.getElementById("stay-btn");
stayBtn.addEventListener("click", () => {
  dealToDealer();
  updateDealer();
  // hitBtn.remove();
  // stayBtn.remove();
});

function updateDealer() {
  let dealerScore = document.getElementById("dealer-score");
  let dealerTotal = dealerHand
    .map((card) => card.value)
    .reduce((prev, curr) => prev + curr, 0);
  dealerScore.textContent = "Dealer Total: " + dealerTotal;
  return dealerTotal;
}

let totalDealer = updateDealer();

function updatePlayer() {
  let playerScore = document.getElementById("player-score");
  let playerTotal = playerHand
    .map((card) => card.value)
    .reduce((prev, curr) => prev + curr, 0);
  playerScore.textContent = "Player Total: " + playerTotal;
  return playerTotal;
}

let totalPlayer = updatePlayer();
console.log(totalPlayer);
console.log(totalDealer);
// // function winner(){
// //   if (totalPlayer > totalDealer){
//   console.log("player wins")
// } else
// // }

//Start game function that will be added to an onclick button
function startGame() {
  shuffle();
  dealToDealer();
  dealToDealer();
  dealToPlayer();
  dealToPlayer();
}
// startGame();
