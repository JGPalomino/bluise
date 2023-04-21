$(window).on('load', function () {

    /*--------------------------
        Products Gallery Slider
    ----------------------------*/
    $(".products_gallery").owlCarousel({
        loop: true,
        margin: 0,
        items: 12,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            768: {
                items: 4,
            },
            0: {
                items: 1,
            }
        }
    });
    
        /*------------------
		Magnific
	--------------------*/

    $('.image-popup').magnificPopup({
        type: 'image'
    });


})