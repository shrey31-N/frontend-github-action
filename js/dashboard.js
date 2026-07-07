const hpTarget = 565;
const speedTarget = 315;

let hp = 0;
let speed = 0;

const hpCounter = document.getElementById("hpCounter");
const speedCounter = document.getElementById("speedCounter");

const hpCircle = document.getElementById("powerMeter");
const speedCircle = document.getElementById("speedMeter");

const circumference = 471;

function animateDashboard(){

let hpInterval = setInterval(()=>{

hp+=5;

if(hp>=hpTarget){

hp=hpTarget;

clearInterval(hpInterval);

}

hpCounter.innerHTML=hp;

hpCircle.style.strokeDashoffset=
circumference-(circumference*hp/hpTarget);

},15);

let speedInterval=setInterval(()=>{

speed+=3;

if(speed>=speedTarget){

speed=speedTarget;

clearInterval(speedInterval);

}

speedCounter.innerHTML=speed;

speedCircle.style.strokeDashoffset=
circumference-(circumference*speed/speedTarget);

},18);

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateDashboard();

observer.disconnect();

}

});

});

observer.observe(document.querySelector(".performance"));

const button=document.getElementById("engineButton");
const status=document.getElementById("engineStatus");

const audio=new Audio("assets/audio/engine.mp3");

let running=false;

button.onclick=()=>{

running=!running;

if(running){

status.innerHTML="Engine Running";

button.innerHTML="STOP ENGINE";

audio.play();

}else{

status.innerHTML="Engine Off";

button.innerHTML="START ENGINE";

audio.pause();

audio.currentTime=0;

}

}