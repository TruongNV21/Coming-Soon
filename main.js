const seconds = document. querySelector(".time-box .seconds .number"),
        hours = document. querySelector(".time-box .hours .number"),
        minutes = document. querySelector(".time-box .minutes .number"),
        days = document. querySelector(".time-box .days .number");


var secValue = 59,
    minValue =  59,
    hourValue = 23, 
    dayValue = 09;

const timeFunction = setInterval(()=>{
    secValue--;
    if(secValue<0){
        minValue--;
        secValue = 59;
    }
    if(minValue<0){
        hourValue--;
        minValue = 59;
    }
    // if(hour==)
    seconds.textContent = secValue < 10 ? `0${secValue}`: secValue;
    minutes.textContent = minValue;
    hours.textContent = hourValue;
    // days.textContent = dayValue;
},1000)
 


