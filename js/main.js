/*  ---------------------------------------------------
    Templater Name: Aesthetic
    Description: Aesthetic medical template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';
/* SCROLLING HEADER
$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

*/

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        //Masonary
        $('.gallery__container').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.gc__item',
            gutter: 20
        });
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".header__menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true,
        'closedSymbol': '<i class="fa fa-angle-right"></i>', // Character after collapsed parents.
        'openedSymbol': '<i class="fa fa-angle-up"></i>', // Character after expanded parents.
    });
    
        /*--------------------------
        Product Thumbnail Selector -- Changing image and name on image click
    ----------------------------*/
  $('.product__item').click(function() {
       var oldProductImage = $('#productImage').attr('src');
       var oldProductName = $('#productName').text();
       var newProductName = $(this).find('p').text();
       var newProductImage = $(this).find('img').attr("src");
      
      $(this).find('img').attr("src", oldProductImage.replace());
      $('#productImage').attr('src', newProductImage.replace());
      $(this).find('p').text(oldProductName);
      $('#productName').text(newProductName);
      });

        // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });


})(jQuery);