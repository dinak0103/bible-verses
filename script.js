const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const scriptureText = document.getElementById('scripture');
const twitterBtn = document.getElementById('twitter');
const newVerseBtn = document.getElementById('new-verse');
const loader = document.getElementById('loader');


function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote
    const quote = localVerses[Math.floor(Math.random() * localVerses.length)];
    scriptureText.textContent = quote.scripture;

    if (quote.verse.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.verse;

    removeLoadingSpinner();
}

// Tweet Verse 
function tweetVerse() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${scriptureText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newVerseBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetVerse);

// On Load
newQuote();

