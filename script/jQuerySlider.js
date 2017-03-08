$(function(){
  var width = 240;
  var animateSpeed = 1000;
  var pause = 2000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slidContainer = $slider.find('.slides');
  var $slideCount = $slidContainer.find('.slide');

  var interval;

  function startSlider(){
    interval = setInterval(function(){
        $slidContainer.animate({'margin-left' : '-='+width},animateSpeed,checkLastSlide);
      },pause);
      function checkLastSlide(){
        currentSlide++;
        if(currentSlide === $slideCount.length){
          currentSlide = 1;
          $slidContainer.css('margin-left',0);
        }
      }
      console.log(interval);
  }

  function pauseSlider(){
    clearInterval(interval);
    console.log(interval);
  }

  $slider.on('mouseenter',pauseSlider).on('mouseleave',startSlider);
  startSlider();
});
