document.querySelector("#backtotop").onclick = function() {  
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};  

let items = document.querySelectorAll('.carousel-mul .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

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
    $('.owl-carousel-news').owlCarousel({
        loop:true,
        margin:30,
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