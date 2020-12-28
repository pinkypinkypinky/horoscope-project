const datePicker = document.getElementById('datePicker');
 
const test = document.getElementById('test');

const placeToShowYourFuture = document.getElementById('placeToShowYourFuture');

const yourStarSign = document.getElementById('yourStarSign');

const yourFuturePrediciton = document.getElementById('yourFuturePrediciton');

const button = document.getElementById('button');



button.addEventListener('click', () => {
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
    
    let bullshit = `Oh wow, you are a ${yourStarSign.innerText}! How wonderful, all people with that star sign are succsessful and rich!`;
    yourFuturePrediciton.innerText = bullshit;
    datePicker.classList.toggle('hidden');
    button.classList.toggle('hidden');
    placeToShowYourFuture.classList.toggle('hidden');
    yourFuturePrediciton.classList.toggle('hidden');
    
});


button.addEventListener("mouseover", () =>{
    button.classList.replace('button', 'hover')

    button.onmouseout = () => {
    button.classList.replace('hover', 'button');
    }
})
