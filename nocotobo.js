$(document).ready(function(){
  $(".itme-1").addClass("animate__animated animate__flipInX");
  $(".itme-2").addClass("animate__animated animate__flipInX");
  $(".itme-3").addClass("animate__animated animate__flipInX");
  $(".itme-4").addClass("animate__animated animate__flipInX");
  $(".itme-5").addClass("animate__animated animate__flipInX");
  $(".itme-6").addClass("animate__animated animate__flipInX");
  $(".sub-1").addClass("animate__animated animate__flipInX");
  $(".sub-2").addClass("animate__animated animate__flipInX");
  $(".sub-3").addClass("animate__animated animate__flipInX");
  $(".newsub-1").addClass("animate__animated animate__fadeInLeft");
  $(".newsub-2").addClass("animate__animated animate__fadeInLeft");
  $(".newsub-3").addClass("animate__animated animate__fadeInLeft");
 });
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1000,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 800,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: true,        // Set CSS color to display scrollUp active point, e.g 'crimson'
        zIndex: 2147483647           // Z-Index for the overlay
    });
});