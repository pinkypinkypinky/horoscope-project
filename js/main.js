// get elemets from html variables
const datePicker = document.getElementById('datePicker');
const textToHide = document.querySelectorAll('.mainText');
const placeToShowYourFuture = document.getElementById('placeToShowYourFuture');
const yourStarSign = document.getElementById('yourStarSign');
const reset = document.getElementById('reset');
const yourFuturePrediciton = document.getElementById('yourFuturePrediciton');
const button = document.getElementById('button');
// Horoscope sentences randomly convine to make a horoscope paragraph
const firstSentences = [`New opportunities are on the horizon.`, `There is a change of energy in the air. `, `It's time to get creative and anything is possible. `, `Changes are coming your way. `, `You are taking back your power this time of year.`, `Balance is hard to manage, but not unattainable looking forward.`, `Your internal world is going through a transformation and you should try to seek balance.`]

const secondSentences = [`Take a step back and think about the relationships that ground you. `, `Consider taking greater risks with your relationships, both platonic and romantic. `, `Reflect on what has been holding you back, and take some chances on that new project at work or a new relationship that presents itself. `, `A fresh start is just around the corner in both your work and home life.`, `The past few weeks have been incredibly busy and the first step to a fresh start is to take care of youself.`, `Luck is certainly on your side, so consider taking a chance on a new adventure.` ]

const question = [`Is this the time for new challenges? `, `Is this the time to pursue new opportunities? `, `What and who brings you gratitude? `, `Have you been holding back?`, `Is there ever a right time for anything?`, `What are you searching for and how can we get you to your destination?`]

const conclusion = [`Today is the day--pursue the path that brings you joy and don't look back. `, `Don't hesitate to take a chance on change, you have so much to gain.`, `Take things step by step as you embark in this new direction. `, `Pause, listen to your internal soul, and think about what feels more right. Then walk in that direction. `, `Cohesion is something you value and coming into your atmosphere soon. Practice patience and trust in the path forward.`]
// function to pick sing 
button.addEventListener('click', () => {
    if(datePicker.value.length != 0){
        let splitDates = datePicker.value.split('-'); //split the input information to use just month and date. 
        let dateToCompare = Number(splitDates[1] + splitDates[2])//convert the split array to num and then compare meaning mm/dd and displaying the starsign.
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
        // geting random senteces from arrays to print the horoscope paragraph
        let first = firstSentences[Math.floor(Math.random() * firstSentences.length)]; 
        let second = secondSentences[Math.floor(Math.random() * secondSentences.length)];
        let third = question[Math.floor(Math.random() * question.length)];
        let fourth = conclusion[Math.floor(Math.random() * conclusion.length)];
        // Getting and Printing out the prediction(Horoscope)
        let prediction = `The stars say you are a ${yourStarSign.innerText}! ${first} ${second} ${third} ${fourth}`;
        yourFuturePrediciton.innerText = prediction;

        // hidding text to display just horoscope,startsugn and button
        Array.from(textToHide).forEach(element=>element.classList.toggle('hidden'));
        placeToShowYourFuture.classList.toggle('hidden');
        reset.classList.toggle('hidden');
    
    }else{//Condition for no input.
        alert("you must enter your birthday and thake a look to what is written in the stars!")
    }
});
// section-button Animation function 
button.addEventListener("mouseover", () =>{
    button.classList.replace('button', 'hover')
    button.onmouseout = () => {
    button.classList.replace('hover', 'button');   
    }
});