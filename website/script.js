var slideindex;
slideindex = 0;
slidenext()

function slidenext() {
    var i;
    var slides = document.getElementsByClassName("myslides");
    
    for (i = 0; i < slides.length;i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideindex].style.display = "block";
    slideindex++;
    console.log(slideindex)
    if (slideindex == slides.length){
        slideindex = 0;
    }
    setTimeout(slidenext,4000);
}