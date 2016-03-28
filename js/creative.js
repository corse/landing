/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('form#formSubEmail').submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: 'https://api.mailgun.net/v3/lists/launch_subscription@corse.im/members',
        data: { address: $('input#subEmail').val() },
        headers: { Authorization: 'Basic api:key-33ec10b967ab94cb011b8d3874e9b98d'},
        dataType: 'json',
        success: function(resp) {
          $('form#formSubEmail').html('<div class="alert alert-success" role="alert">Thank you for your interest.</div>');
        },
        error: function(err) {
          console.log('er', err);
        }
      });
    })


    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
