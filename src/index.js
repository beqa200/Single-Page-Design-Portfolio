const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const slider = document.querySelector('.slider');
let n = 0;

back.addEventListener("click", () => {
    forward.style.background = "";
    forward.style.cursor = "pointer";

    if(n<=1){
        n++;
        slider.style.marginLeft = n * (slider.querySelector('img').width + 15) + "px";
    } 
    
   if(n==2) {
    back.style.background = "#7A746E";
    back.style.cursor = "default";
   } else {
    back.style.background = ""; 
   }

})

forward.addEventListener("click", () => {
    back.style.background = "";
    back.style.cursor = "pointer";

    if(n>=-1){
        n--;
        slider.style.marginLeft = n * (slider.querySelector('img').width + 15) + "px"; 
    }
   
    if(n == -2) {
        forward.style.background = "#7A746E";
        forward.style.cursor = "default";
       } else {
        forward.style.background = "";
       }
    
})