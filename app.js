const cards = document.querySelectorAll('.card');

let returnedCard = false;
let firstCard, secondCard;
let locked = false;

cards.forEach(card => {
    card.addEventListener('click', returnCard)
})

function returnCard() {

    if(locked){
        console.log(locked);
    }

    this.childNodes[1].classList.toggle('active');

    if(!returnedCard) {

        returnedCard = true;
        firstCard = this;
        return;

    }

    returnedCard = false;
    secondCard = this;

    //console.log(firstCard, secondCard);

    matching();
}

function matching() {
    
    if(firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')) {

        firstCard.removeEventListener('click', returnCard);
        secondCard.removeEventListener('click', returnCard);

    } else {
        locked = true;
        setTimeout(() => {
            firstCard.childNodes[1].classList.remove('active');  
            secondCard.childNodes[1].classList.remove('active');  
            locked = false
        }, 1500)
    }

}

function randomly() {
    cards.forEach( card => {
        let randomPoss = Math.floor(Math.random() * 12);
        card.style.order = randomPoss;
    })
}
randomly();