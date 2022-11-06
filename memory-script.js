const section = document.querySelector ('section');
const turns = document.querySelector('span');
let turnsRemaining = 10;
turns.textContent = turnsRemaining;

const cardInfo = () => [
    {imgSrc: './images/daughterofeve.PNG', name: 'Daughter Of Eve'},
    {imgSrc: './images/changingofthecrowns.PNG', name: 'Changing of the Crowns'},
    {imgSrc: './images/triadchampion.PNG', name: 'Triad Champion'},
    {imgSrc: './images/bookonetitle.PNG', name: 'Book 1 Title'},
    {imgSrc: './images/booktwotitle.PNG', name: 'Book 2 Title'},
    {imgSrc: './images/bookthreetitle.PNG', name: 'Book 3 Title'},
    {imgSrc: './images/allbooks.PNG', name: 'All Three Books'},
    {imgSrc: './images/bookoneback.PNG', name: 'Book 1 Back Cover'},
    {imgSrc: './images/daughterofeve.PNG', name: 'Daughter Of Eve'},
    {imgSrc: './images/changingofthecrowns.PNG', name: 'Changing of the Crowns'},
    {imgSrc: './images/triadchampion.PNG', name: 'Triad Champion'},
    {imgSrc: './images/bookonetitle.PNG', name: 'Book 1 Title'},
    {imgSrc: './images/booktwotitle.PNG', name: 'Book 2 Title'},
    {imgSrc: './images/bookthreetitle.PNG', name: 'Book 3 Title'},
    {imgSrc: './images/allbooks.PNG', name: 'All Three Books'},
    {imgSrc: './images/bookoneback.PNG', name: 'Book 1 Back Cover'},
];  

const randomize = () => {
    const myCards = cardInfo();
    myCards.sort(() => Math.random() - 0.5);
    return myCards;
};

const makeCards = () => {
    const myCards = randomize();
    myCards.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });   
};

const checkCards = (e) => {
    const chosenCard = e.target;
    chosenCard.classList.add('turned');
    const turnedCards = document.querySelectorAll('.turned');
    const toggleCard = document.querySelectorAll('.toggleCard');
    if (turnedCards.length === 2){
        if(
            turnedCards[0].getAttribute('name') ===
            turnedCards[1].getAttribute('name')
        ) {
            turnedCards.forEach((card) => {
                card.classList.remove('turned');
                card.style.pointerEvents = 'none';
            });
        } else {
            turnedCards.forEach((card) => {
                card.classList.remove('turned');
                setTimeout (() => card.classList.remove('toggleCard'), 1500);
            });
            turnsRemaining--;
            turns.textContent = turnsRemaining;
            setTimeout(() => {
                if(turnsRemaining === 0) {
                    restart('Opps. Nice try. Try Again!');
                }
            }, 1000);
        }
    }
    setTimeout(() => {
        if(toggleCard.length === 16){
            restart('Congratulations! You Won! Play Again!');
        }
    }, 1500);
};

const restart = (text) => {
    let myCards = randomize();
    let cards = document.querySelectorAll('.card');
    let fronts = document.querySelectorAll('.front');
    let back = document.querySelectorAll('.back');
    section.style.pointerEvents = 'none';
        myCards.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            fronts[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1500);
    });
    turnsRemaining = 10;
    turns.textContent = turnsRemaining;
    setTimeout(() => window.alert(text), 1000);
};

makeCards();


