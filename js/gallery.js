const swiper=new Swiper(".mySwiper",{

loop:true,

autoplay:{

delay:3500,

disableOnInteraction:false

},

pagination:{

el:".swiper-pagination",

clickable:true

},

effect:"coverflow",

coverflowEffect:{

rotate:25,

stretch:0,

depth:120,

modifier:1,

slideShadows:true

}

});