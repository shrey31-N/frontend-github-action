const slider=document.getElementById("volume");

if (slider && typeof audio !== "undefined") {
    slider.oninput=()=>{

        audio.volume=slider.value;

    };
}