const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const messageText = document.getElementById('message-text');
const closeBtn = document.getElementById('close-btn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const message = card.getAttribute('data-message');
        messageText.textContent = message;
        popup.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
