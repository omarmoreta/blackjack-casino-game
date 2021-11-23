//Create a deck of cards with 4 suit and 13 values, 52 cards total
let suit = ["hearts", "diamonds", "spades", "clubs"];
let value = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Joker", "Queen", "King"];
let deck = [];
function createCards() {
  for (let s = 0; s < suit.length; s++) {
    for (let v = 0; v < value.length; v++) {
      deck.push(value[v] + " " + "of" + " " + suit[s]);
    }
  }
  return deck;
}
createCards();
console.log(deck);
