$('.owl-carousel').owlCarousel({
    autoplay:true,
    navText:['<i class="glyphicon glyphicon-chevron-left"></i>','<i class="glyphicon glyphicon-chevron-right"></i>'],
    smartSpeed: 1500,
    loop:true,    
    margin: 45,
    dots: false,
    nav:true,    
    autoplayTimeout: 2000,
    stagePadding: 50,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

