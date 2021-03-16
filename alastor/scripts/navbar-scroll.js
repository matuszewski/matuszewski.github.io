// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
    checkScroll();
};

function checkScroll() {
    //The point where the navbar changes in px
    var startY = $('.navbar').height() * 5; 

    if($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }




    
}