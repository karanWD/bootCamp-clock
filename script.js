const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digHour = document.querySelector(".digital-hour")
const digMin = document.querySelector(".digital-min")
const digSec = document.querySelector(".digital-sec")

function setDate() {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    hr_rotation = 30 * hr + min * 0.5; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hourHand.style.transform = `rotate(${hr_rotation}deg)`;
    minsHand.style.transform = `rotate(${min_rotation}deg)`;
    secondHand.style.transform = `rotate(${sec_rotation}deg)`;

    digHour.innerHTML=("0"+hr).slice(-2)
    digMin.innerHTML=("0"+min).slice(-2)
    digSec.innerHTML=("0"+sec).slice(-2)
}

setInterval(setDate, 1000);

setDate();