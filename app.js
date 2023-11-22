document.addEventListener('DOMContentLoaded', () => {
    
    //list all card options
    
    const cardArray = [
      {
        name: 'fox-blush',
        img: 'images/fox-blush.png'
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
        name: 'fox-happy',
        img: 'images/fox-happy.png'
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
        name: 'fox-blush',
        img: 'images/fox-blush.png'
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
        name: 'fox-happy',
        img: 'images/fox-happy.png'
      },
      {
        name: 'fox-laptop',
        img: 'images/fox-laptop.png'
      },
      {
        name: 'fox-snug',
        img: 'images/fox-snug.png'
      }
    ];
  
    //sorting the cards randomly

    cardArray.sort(() => 0.5 - Math.random());
  
    //creating variables

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //FUNCTIONS
  
    //creating the board

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
      }
    };
  
    //checking for matches

    function checkForMatch() {
      const cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same image!');
      }else if (cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'images/square.png');
        cards[optionTwoId].setAttribute('src', 'images/square.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        setTimeout(20000);
      }
      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = cardsWon.length;
      if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = ' Congratulations! You found them all! 🎉';
      }
    }
  
    //flipping the card

    function flipCard() {
      let cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    };
  
    createBoard();
  });