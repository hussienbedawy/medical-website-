$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    dots:false,
    nav:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        
        500:{
            items:2,
            nav:false
        },
        900:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            
        }
    }
})