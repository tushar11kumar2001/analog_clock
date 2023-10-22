const hourHand = document.querySelector(".hr");
const mintHand = document.querySelector(".mint");
const secHand = document.querySelector(".sec");
var showTime =  document.querySelector(".showtime");
var time;


setInterval(() =>{

    let date = new Date();
    let hour = new Date().getHours();
    let mint = new Date().getMinutes();
    let sec = new Date().getSeconds();


    let hrRotation = 30*hour + mint/2;
    let mintRotation = 6*mint;
    let secRotation = 6*sec;
     showTime.innerHTML = `${hour}:${mint}:${sec}`;
    // showTime.appendChild(time);
    

     hourHand.style.transform = `rotate(${hrRotation}deg)`;
     mintHand.style.transform = `rotate(${mintRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;

},1000);
