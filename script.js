const quoteText = document.querySelector(".quote")
const quoteAuthor = document.querySelector(".name")
quoteBtn = document.querySelector("button")
soundBtn = document.querySelector(".sound")
copyBtn = document.querySelector(".copy")
twitterBtn = document.querySelector(".twitter")

function randomQuote() {
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        quoteAuthor.innerText = result.author;
        quoteBtn.innerText = "New Quote";
    })
}

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`)
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, '_blank');
})



quoteBtn.addEventListener('click', randomQuote)