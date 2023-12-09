$(document).ready(function () {
    // Initialize Slick Carousel with default settings
    $('.slick-carousel').slick({
      slidesToShow: 2, // Show two slides on larger screens
      slidesToScroll: 2, // Scroll two slides at a time on larger screens
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      arrows:false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Show one slide at a time on mobile screens
            slidesToScroll: 1, // Scroll one slide at a time on mobile screens
            arrows: false,
            autoplay: false
          },
        },
      ],
    });
  
    // Update Slick Carousel settings for mobile screens
    function updateSlickSettings() {
      var windowWidth = $(window).width();
  
      // Check if the screen width is less than or equal to 768 pixels (adjust as needed)
      if (windowWidth <= 768) {
        // Update Slick Carousel settings for mobile
        $('.slick-carousel').slick('unslick'); // Unslick to destroy the initial instance
        $('.slick-carousel').slick({
          slidesToShow: 1, // Show one slide at a time on mobile screens
          slidesToScroll: 1, // Scroll one slide at a time on mobile screens
          dots: true,
          arrows: false,
          infinite: true,
          adaptiveHeight: true,
          autoplay: false,
        });
      } else {
        // Reinitialize Slick Carousel with default settings for larger screens
        // Reinitialize Slick Carousel with default settings for larger screens
        $('.slick-carousel').slick('unslick');
        $('.slick-carousel').slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          infinite: true,
          adaptiveHeight: true,
          autoplay: true
        });
      }
    }
  
    // Call the function on page load
    updateSlickSettings();
  
    // Call the function whenever the window is resized
    $(window).resize(function () {
      updateSlickSettings();
    });
  });