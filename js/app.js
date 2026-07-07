AOS.init();

window.addEventListener("scroll",()=>{

let scroll=

document.documentElement.scrollTop;

let height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

document.getElementById("progress").style.width=

(scroll/height)*100+"%";

});

gsap.from(".hero-content",{

y:150,

opacity:0,

duration:1.5

});

gsap.from(".logo",{

x:-100,

opacity:0,

duration:1

});

gsap.from("nav ul li",{

y:-50,

opacity:0,

stagger:.15,

duration:1

});

VanillaTilt.init(document.querySelectorAll(".tilt"),{

max:15,

speed:400,

glare:true,

"max-glare":0.35,

scale:1.04

});

gsap.from(".car-card",{

scrollTrigger:".featured",

opacity:0,

y:100,

duration:1,

stagger:.25

});

gsap.registerPlugin(ScrollTrigger);

gsap.timeline()

.from(".logo",{

y:-80,

opacity:0,

duration:1

})

.from("nav ul li",{

opacity:0,

y:-40,

stagger:.12,

duration:.7

})

.from(".hero h1",{

opacity:0,

y:100,

duration:1

})

.from(".hero p",{

opacity:0,

duration:1

})

.from(".btn",{

scale:0,

duration:.6

});