# horoscope-project
A project with horoscopes

Aries (March 21 - April 19)

Taurus (April 20 - May 20)

Gemini (May 21 - June 20)

Cancer (June 21 - July 22)

Leo (July 23 - August 22)

Virgo (August 23 - September 22)

Libra (September 23 - October 22)

Scorpio (October 23 - November 21)

Sagittarius (November 22 - December 21)

Capricorn (December 22 - January 19)

Aquarius (January 20 - February 18)

Pisces (February 19 - March 20)


GOALS :
Create our own 'dropdown menus' NO
Use <input type='date'> 
Display Star sign to the DOM
Display random Paragraph of bullshit to the DOM
Flowers and colors and whatever

const firstSentences = [`You may have to stand by a difficult decision today.`, `Unfortunately things don't always work out the way you plan. `, `Today might be the day you have to heal an old wound. `, `Today you'll remember what it's like to be a child again. `]

const secondSentences = [`You could feel an urgent need for stability in your personal life. `, `Time is starting to pass by quicker and quicker every day. `, `For the first time in a long time, you actually feel awake. `, `Your heart aches for a new beginning today. ` ]

const question = [`What is really behind this feeling? `, `Is this really true? `, `Do you ever feel like you're at the mercy of the universe? `]

const nextQuestion = [`Is it possible that you're just afraid of your desire? `, `Why can't we just put the past behind us and move forward? `, `Are we human? Or are we dancer? `, `Why does it always rain on me? `]





let first = firstSentences[Math.floor(Math.random() * firstSentences.length)];
let second = secondSentences[Math.floor(Math.random() * secondSentences.length)];
let third = question[Math.floor(Math.random() * question.length)];
let fourth = nextQuestion[Math.floor(Math.random() * nextQuestion.length)];

let bullfrog = `Oh wow, you are a ${yourStarSign.innerText}! Well that means...${first} ${second} ${third} ${fourth}Stay Tuned folx.`;

yourFuturePrediciton.innerText = bullfrog;


let bullshit = `Oh wow, you are a ${yourStarSign.innerText}! How wonderful, all people with that star sign are succsessful and rich!`;
        yourFuturePrediciton.innerText = bullshit;