let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let player = {
  name: 'John',
  chips: 100,
}
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = `${player.name}: $${player.chips}`

function startGame() {
  document.getElementById('start-game-btn').disabled = true
  isAlive = true
  let firstCard = randomCard()
  let secondCard = randomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + '-'
  }

  sumEl.textContent = `Sum: ${sum}`

  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = 'BLACKJACK!'
    hasBlackJack = true
  } else {
    message = 'Bust!'
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  let card = randomCard()
  if (isAlive === true && sum < 21) {
    cards.push(card)
    sum += card
    renderGame()
  }
}

function randomCard() {
  let random = Math.floor(Math.random() * 13) + 1
  if (random > 10) {
    return 10
  } else if (random === 1) {
    return 11
  } else {
    return random
  }
}

function reset() {
  cards = []
  sum = 0
  hasBlackJack = false
  isAlive = false
  messageEl.textContent = 'Want to play a round?'
  cardsEl.textContent = 'Cards: '
  sumEl.textContent = 'Sum: '
  document.getElementById('start-game-btn').disabled = false
}
