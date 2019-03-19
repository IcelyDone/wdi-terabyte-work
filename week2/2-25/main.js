const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const deck = []
let player1Card = null
let player2Card = null

const buildDeck = function() {
  for (i = 0; i < suits.length; i++) {
    for (j = 0; j < values.length; j++) {
      deck.push({
        suit: suits[i],
        value: values[j]
      })
    }
  }
}

const dealCardsToPlayers = function() {
  let rand1 = Math.floor(Math.random() * 52)
  let rand2 = Math.floor(Math.random() * 52)
  player1Card = deck.splice(rand1,1)
  player2Card = deck.splice(rand2,1)
}

const announceCards = function() {
  console.log(`Player 1 is showing ${player1Card[0].value} of ${player1Card[0].suit}`)
  console.log(`Player 2 is showing ${player2Card[0].value} of ${player2Card[0].suit}`)
}

const cardToRank = function(card) {
}

const announceWinner = function() {
  // Hint: Who is the winner? Print the winner.
}

const returnCardsToDeck = function() {
}

const playGame = function() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck()
playGame()
