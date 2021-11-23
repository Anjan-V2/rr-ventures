(function($, document, window){
	

	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
		});

		$(".testimonial-slider").flexslider({
			controlNav: true,
			directionNav: false,
			animation: "slide"
		});

	    if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14 
					}  
				},
				marker:{
					address: "40 Sibley St, Detroit",
				}
			},
			"autofit" );
	    	
	    }
	});
	

	$('.counter').counterUp({
		delay: 10,
		time: 2000,
	});		

	/* Bootstrap Accordion  */
	$('.faq-part .card').each(function () {
		var $this = $(this);
		$this.on('click', function (e) {
			e.preventDefault ();
			var has = $this.hasClass('active');
			$('.faq-part .card').removeClass('active show');
			if (has) {
				$this.removeClass('active show');
			} else {
				$this.addClass('active show');
			}
		});
	});


	var $container = $('.filterable-items').imagesLoaded(function(){
		$('.filterable-items').isotope({	    
	        filter: '*',
	        layoutMode: 'fitRows',
			percentPosition: true,
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        },
			transitionDuration: '0.6s'
	    });

	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	});

	
})(jQuery, document, window);