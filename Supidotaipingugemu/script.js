const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
let startTime;

quoteInputElement.addEventListener('input', checkTypedText)

// quoteInputElement.addEventListener('input', () => {
//     const arrayQuote = quoteDisplayElement.querySelectorAll('span')
//     const arrayValue = quoteDisplayElement.value.split('')
//     let correct = true
//     arrayQuote.forEach((characterSpan, index) => {
//         const character = arrayValue[index]
//         if (character == null) {
//             characterSpan.classList.remove('correct')
//             characterSpan.classList.remove('incorrect')
//             correct = false
//         } else if (character === characterSpan.innerText) {
//             characterSpan.classList.add('correct')
//             characterSpan.classList.remove('incorrect')
//         } else {
//             characterSpan.classList.remove('correct')
//             characterSpan.classList.add('incorrect')
//             correct = false
//         }
//     })
//     if (correct) renderNewQuote()
// })

// async function getRandomQuote() {
//     // return fetch(RANDOM_QUOTE_API_URL)
//     //     .then(response => response.json())
//     //     .then(data => data.content)
//     const response = await fetch(RANDOM_QUOTE_API_URL);
//     const data = await response.json();
//     return data.content;
// }

async function getRandomQuote() {
    try {
        const response = await fetch(RANDOM_QUOTE_API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (!data || !data.content) {
            throw new Error('Invalid data received from the API');
        }
        return data.content;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// async function renderNewQuote() {
//     const quote = await getRandomQuote()
//     quoteDisplayElement.innerHTML = ''
//     quote.split('').forEach(character => {
//         const characterSpan = document.createElement('span')
//         characterSpan.innerText = character
//         quoteDisplayElement.appendChild(characterSpan)
//     })
//     quoteInputElement.value = null;
//     // console.log(quote);
//     // return quote;
//     startTimer()
// }

async function renderNewQuote() {
    try {
        const quote = await getRandomQuote();
        if (quote) {
            quoteDisplayElement.innerHTML = '';
            quote.split('').forEach(character => {
                const characterSpan = document.createElement('span');
                characterSpan.innerText = character;
                quoteDisplayElement.appendChild(characterSpan);
            });
            startTimer(); // Call startTimer function after rendering new quote
        } else {
            console.error('Failed to fetch a new quote');
        }
    } catch (error) {
        console.error('Error rendering new quote:', error);
    }
}

function resetInputField() {
    quoteInputElement.value = '';
}

function startTimer() {
    console.log('Timer started'); // Add this log statement
    let seconds = 0; // Initialize seconds
    //timerElement.innerText = seconds
    setInterval(() => {
        timerElement.innerText = ++seconds; // Update timer value every second
    }, 1000);
    // startTime = new Date()
    // setInterval(() => {
    //     timer.innerText = getTimerTime()
    // }, 1000)
}

// function getTimerTime() {
//     return Math.floor((new Date() - startTime) / 1000)
// }

function stopTimer() {
    clearInterval(startTime);
}

function checkTypedText() {
    const typedText = quoteInputElement.value;
    const displayedText = quoteDisplayElement.innerText;
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');

    arrayQuote.forEach((characterSpan, index) => {
        const character = typedText[index];
        if (character == null) {
            characterSpan.classList.remove('correct', 'incorrect');
        } else if (character === displayedText[index]) {
            characterSpan.classList.remove('incorrect');
            characterSpan.classList.add('correct');
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
        }
    });

    if (typedText === displayedText) {
        stopTimer();
        setTimeout(renderNewQuote, 1000); // Delay before rendering new quote
    }
}

renderNewQuote();