// All needs to be refactored

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// ==============================================
// Back To Top Button
// ===============================================

  $(window).scroll(function () {
   // debugger;
            if ($(this).scrollTop() > 50) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('.back-top').click(function () {
          $('.back-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });

      $('.back-top').tooltip('hide');


// ==============================================
// Pause button for header vid
// ===============================================





var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector(".pause-btn");
debugger;

// function vidFade() {
// vid.classList.add("stopfade");
// }

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
vid.classList.toggle("stopfade");
if (vid.paused) {
vid.play();
pauseButton.innerHTML = "Pause";
} else {
vid.pause();
pauseButton.innerHTML = "Paused";
}
});
