document.addEventListener('DOMContentLoaded', () => {

});
//card options
const cardArray = [
    {
        name: 'fox-blush',
        img: 'images/fox-blush.png'
    },
    {
        name: 'fox-blush',
        img: 'images/fox-blush.png'
    },
    {
        name: 'foxBread',
        img: 'images/fox-bread.png'
    },
    {
        name: 'fox-bread',
        img: 'images/fox-bread.png'
    },
    {
        name: 'fox-coffee',
        img: 'images/fox-coffee.png'
    },
    {
        name: 'fox-coffee',
        img: 'images/fox-coffee.png'
    },
    {
        name: 'fox-happy',
        img: 'images/fox-happy.png'
    },
    {
        name: 'fox-happy',
        img: 'images/fox-happy.png'
    },
    {
        name: 'fox-laptop',
        img: 'images/fox-laptop.png'
    },
    {
        name: 'fox-laptop',
        img: 'images/fox-laptop.png'
    },
    {
        name: 'fox-snug',
        img: 'images/fox-snug.png'
    },
    {
        name: 'fox-snug',
        img: 'images/fox-snug.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create the board

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
};

//check for matches

function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosen[1];
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/square.png');
        cards[optionTwoId].setAttribute('src', 'images/square.png');
        cardsWon.push(cards);
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!';
    }
};

//flip the cards

function flipCard (){
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch,500);
    }
};


createBoard();