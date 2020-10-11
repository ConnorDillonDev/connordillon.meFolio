var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".slide-right"); //element

window.addEventListener('scroll', function(){ 
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});