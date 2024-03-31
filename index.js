



function addCard() {
    const number = Math.floor(Math.random() * 1000);
    const flag = "";
    const date = document.getElementById('calendar').value;
    const info = document.getElementById('text').value;

    const card = { number, flag, date, info };
    const cardsContainer = document.getElementById('cards-container');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
        <p><strong>Номер:</strong> ${card.number}</p>
        <p><strong>Флаг:</strong> ${card.flag}</p>
        <p><strong>Дата:</strong> ${card.date}</p>
        <p><strong>Маалымат:</strong> ${card.info}</p>
        <button onclick="deleteCard(this)">X</button>
    `;
    
    cardsContainer.appendChild(cardElement);
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(card);
    localStorage.setItem('cards', JSON.stringify(cards));
}


function deleteCard(button) {
    const cardElement = button.parentElement;
    const cardsContainer = document.getElementById('cards-container');
    const cards = JSON.parse(localStorage.getItem('cards'));
    const cardNumber = parseInt(cardElement.querySelector('p:first-child').textContent.split(': ')[1]);
    const cardIndex = cards.findIndex(card => card.number === cardNumber);
    cards.splice(cardIndex, 1);
    
    localStorage.setItem('cards', JSON.stringify(cards));
    
    cardsContainer.removeChild(cardElement);

}
function onCountryButtonClick(e) {
    e.preventDefaulet();
}
new AirDatepicker('#calendar', {
    onSelect: (selecteDates) => {
        const span = document.createElement('span');
        span.innerHTML = selecteDates.date;

        document.querySelector('data').appendChild(span);
    }

});
