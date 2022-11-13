
let animateArea = document.querySelector('.animateArea');
const testPos = document.querySelector('.testPos').offsetTop;
const shadowHuman = document.querySelector('[data-shadowHuman]');
const flashLight = document.querySelector('.flashLight');
const sparkOne =document.querySelector('.sparkOne');
window.addEventListener('scroll',scrollEvt);



function scrollEvt(){
   let scrollPos = window.scrollY; 
   //console.log(scrollPos);
 //console.log('testPos'+testPos); 
    if(scrollPos>=100 && scrollPos<4000) {
        animateArea.style.position="fixed";
        animateArea.style.top="0";
    }else if(scrollPos>=700 && scrollPos<3200){
        flashLight.style.display="block";
    }else{
        animateArea.style.position="static";
        flashLight.style.display="none";
    }

 }
