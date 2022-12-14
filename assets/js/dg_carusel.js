$(document).ready(function(){

    $('.owl-carousel-book').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoWidth:true,
    responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });

    $('.owl-carousel-promotion').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots:false,
    autoWidth:true,
    responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1000:{
                items:1,
            },
            1600:{
                items:2,
            },

        }
    });

    $('.owl-carousel-news').owlCarousel({
        loop:true,
        margin:60,
        nav:false,
        dots:false,
        autoWidth:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });
});