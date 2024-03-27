const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");

//generate random color
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
       color += hex[Math.floor(Math.random() *16)];
    }
    return color;
};


let intervalId;
const startChangincolor = function() {

    const changeBgcolor = function() {
    document.body.style.backgroundColor = randomColor();
}
    if(!intervalId){
        intervalId = setInterval(changeBgcolor,1000);
    }
};

const stopChangincolor = function() {
clearInterval(intervalId);
intervalId = null;    
};

btnStart.addEventListener('click' , startChangincolor);
btnStop.addEventListener('click', stopChangincolor);


