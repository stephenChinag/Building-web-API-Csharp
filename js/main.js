jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01
        
      });

      var typed = new Typed('.text', {
        strings: ['This is a JavaScript library',
                   'This is an ES6 module'],
        typeSpeed:60,
        backSpeed:60,
        loop: true // Default value
      });
});

