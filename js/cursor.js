const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.pageX+"px";

glow.style.top=e.pageY+"px";

});