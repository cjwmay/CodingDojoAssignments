function CardConstructor(value, suit){
  this.value = value;
  this.suit = suit;
}

function DeckConstructor(){
  this.buildDeck();
}

DeckConstructor.prototype.buildDeck = function(){
  var numbers = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
  var suits = ['diamond','clubs','hearts','spades'];
  this.cards = [];
  for(var index in suits){
    var suit = suits[index];
    for( var index in numbers){
      var number = numbers[index];
      this.cards.push(new CardConstructor(number,suit))
    }
  }
  // console.log(this.cards)
  return this;
}

DeckConstructor.prototype.shuffle = function(){
  var unshuffledEdge = this.cards.length,
      cardToShuffleIdx,
      temp;

  // While there remain elements to shuffle…
  while (unshuffledEdge > 0) {
    // Pick an element in the unshuffled portion…
    cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
    // Move the unshuffledEdge closer to front of array
    unshuffledEdge -= 1;

    // And swap the chosen card to the back
    temp = this.cards[cardToShuffleIdx]
    this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge]
    this.cards[unshuffledEdge] = temp;
  }
  return this
};
DeckConstructor.prototype.reset = function(){
  this.buildDeck().shuffle();
}
DeckConstructor.prototype.deal = function(){
  //console.log(this);
  if (this.cards.length>0){
    dealedcard = this.cards[this.cards.length-1];
    this.cards.pop();
  }
  console.log(dealedcard);
  return(dealedcard)
}

function PlayerConstructor(name){
  this.name = name;
  this.hand = [];
}
PlayerConstructor.prototype.takecard = function(deck){
  //console.log(deck.deal())
  this.hand.push(deck.deal());
  //console.log(this.hand)
  return this;
}
PlayerConstructor.prototype.discardcard = function(cardIdx){
  if(this.hand.length > cardIdx){
    this.hand.splice(cardIdx,1);
  }
  return this;
}

var deckone = new DeckConstructor();
deckone.shuffle();
var Jingwen = new PlayerConstructor();
Jingwen.takecard(deckone);
