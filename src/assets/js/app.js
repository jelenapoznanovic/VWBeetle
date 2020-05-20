/* eslint-disable */

// ON DOCUMENT READY
$(document).ready(() => {

    //SVG for Everybody (ie9+, ...)
    svg4everybody();
    
	// ACTIVATE HEADER LINKS ON SCROLL
	var lastId,
	topMenu = $(".header-main__navigation"),
	topMenuHeight = topMenu.outerHeight()+200,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    // Bind to scroll
    $(window).on('scroll', function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("is-active")
            .end().filter(`[href="#${id}"]`).parent().addClass("is-active");
        }
    });
    // END ACTIVATE HEADER LINKS ON SCROLL
    
	// VARIABLES
	const header_height = $('.header-main').outerHeight();
	// END VARIABLES
	// SCROLL PAGE FOR ALL TARGET LINKS (SMOOTH SCROLL)
	$('.header-main__navigation a').smoothScroll({
		offset: - header_height + 2,
			// one of 'top' or 'left'
			direction: 'top',
			// only use if you want to override default behavior
			scrollTarget: null,
			// fn(opts) function to be called before scrolling occurs.
			// `this` is the element(s) being scrolled
			beforeScroll: function() {

			},
			// fn(opts) function to be called after scrolling occurs.
			// `this` is the triggering element
			afterScroll: function() {},
			speed: 600,
			easing: 'easeInOutExpo',
			// coefficient for "auto" speed
			autoCoefficent: 1,
			// $.fn.smoothScroll only: whether to prevent the default click action
			preventDefault: true
		});
    // END SCROLL PAGE
    
    //SHOW NAV ON HAMBURGER CLICK
    $('.header-main__hamburger').on('click', function() {
        $('.header-main').toggleClass('show-nav')
    })

    // SLICK SLIDER
    $('.js-hero-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    
    
    
    $('.js-shop-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    // dots: false,
              
            }
          }
        ]
      });

});


