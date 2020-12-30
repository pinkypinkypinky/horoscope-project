const datePicker = document.getElementById('datePicker');
 
const test = document.getElementById('test');

const container = document.getElementById('container');

const placeToShowYourFuture = document.getElementById('placeToShowYourFuture');

const yourStarSign = document.getElementById('yourStarSign');

const yourFuturePrediciton = document.getElementById('yourFuturePrediciton');

const button = document.getElementById('button');

const hideMe = document.querySelectorAll('.hideMe');

const theTruth = document.querySelectorAll('.theTruth');

let futureHasBeenDisplayed = false;



const firstSentences = [`You may have to stand by a difficult decision today.`, `Unfortunately things don't always work out the way you plan. `, `Today might be the day you have to heal an old wound. `, `Today you'll remember what it's like to be a child again. `]

const secondSentences = [`You could feel an urgent need for stability in your personal life. `, `Time is starting to pass by quicker and quicker every day. `, `For the first time in a long time, you actually feel awake. `, `Your heart aches for a new beginning today. ` ]

const question = [`What is really behind this feeling? `, `Is this really true? `, `Do you ever feel like you're at the mercy of the universe? `]

const nextQuestion = [`Is it possible that you're just afraid of your desire? `, `Why can't we just put the past behind us and move forward? `, `Are we human? Or are we dancer? `, `Why does it always rain on me? `]


button.addEventListener('click', () => {
        let x = 0;

    // if(datePicker.value.length != 0){
        let splitDates = datePicker.value.split('-');
        console.log(splitDates);
        let dateToCompare = Number(splitDates[1] + splitDates[2])
        if(dateToCompare > 1221){
            yourStarSign.innerText = 'Capricorn'  
        }else if(dateToCompare > 1121){
            yourStarSign.innerText = 'Sagittarius'
        }else if(dateToCompare > 1022){
            yourStarSign.innerText = 'Scorpio'
        }else if(dateToCompare > 922){
            yourStarSign.innerText = 'Libra'
        }else if(dateToCompare > 822){
            yourStarSign.innerText = 'Virgo'
        }else if(dateToCompare > 722){
            yourStarSign.inenrText = 'Leo'
        }else if(dateToCompare > 620){
            yourStarSign.innerText = 'Cancer'
        }else if(dateToCompare > 520){
            yourStarSign.innerText = 'Geminis'
        }else if(dateToCompare > 419){
            yourStarSign.innerText = 'Taurus'
        }else if(dateToCompare > 320){
            yourStarSign.innerText = 'Aries'
        }else if(dateToCompare > 218){
            yourStarSign.innerText = 'Pisces'
        }else if(dateToCompare > 119){
            yourStarSign.innerText = 'Aquarius'
        }else if(dateToCompare > 100 ){
            yourStarSign.innerText = 'Capricorn'
            console.log(dateToCompare);
        }
        let first = firstSentences[Math.floor(Math.random() * firstSentences.length)];
        let second = secondSentences[Math.floor(Math.random() * secondSentences.length)];
        let third = question[Math.floor(Math.random() * question.length)];
        let fourth = nextQuestion[Math.floor(Math.random() * nextQuestion.length)];

        let bullfrog = `Oh wow, you are a ${yourStarSign.innerText}! Well that means...${first} ${second} ${third} ${fourth}Stay Tuned folx.`;


        container.classList.replace('crystalBall', 'predictionPrepare');
        yourFuturePrediciton.innerText = bullfrog;
        hideMe.forEach(e => e.classList.toggle('hidden'));
        placeToShowYourFuture.classList.toggle('hidden')
        if(datePicker.classList.contains('hidden')){
        container.addEventListener('transitionend', () => {
        console.log('it is done');
        x++;
        console.log(x)
        if(x >= 1) {
            container.classList.replace('predictionPrepare', 'predictionBegin');
            theTruth.forEach(e => e.classList.replace('theTruth', 'theTruthRevealed'))
        }
        })
        }

        


        futureHasBeenDisplayed = true;
    // }
});








//BUTTON ANIMATION
button.addEventListener("mouseover", () =>{
    button.classList.replace('button', 'hover');
    
   
    button.onmouseout = () => {
    
    
    button.classList.replace('hover', 'button');
    }
    
    
})



