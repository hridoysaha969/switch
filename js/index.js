alert('This website made by Hridoy Saha');

$(document).ready(function () {
    // Sticky Menu
    $('.js-section').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
    });

    // Tabs
    $('#container').skeletabs();

    // SLider
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        autoplay: true
    });
})


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileNav = document.querySelector('.mobileNav');

hamberger.addEventListener('click', function() {
    mobileMenu.classList.add('open')
});
times.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});
mobileNav.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});

