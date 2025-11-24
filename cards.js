let cards = document.querySelectorAll(".card");
let current = 0;  // index of the card on top

function showNextCard() {
    // remove top rotation (optional smooth look)
    cards[current].style.transform = "translate(-50%, -50%) rotate(-26deg)";
    cards[current].style.zIndex = 1;

    // move to next card
    current++;

    if (current >= cards.length) {
        current = 0; // loop back to first card
    }

    // bring new top card forward
    cards[current].style.zIndex = 50;
    cards[current].style.transform = "translate(-50%, -50%) rotate(0deg) scale(1.05)";

    setTimeout(() => {
        // smooth reset
        cards[current].style.transform = "translate(-50%, -50%) rotate(0deg)";
    }, 300);
}

// When ANY card is clicked → go to next card
cards.forEach(card => {
    card.addEventListener("click", showNextCard);
});
