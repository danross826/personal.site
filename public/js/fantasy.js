// $(document).ready( function() {
    'use strict'

alert("success");
    $(window).scroll(function() {
        console.log('in scroll');
        $('.sectionTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).css("visibility", "visible");
                $(this).addClass("rotateIn")
                console.log('in if statement');
            }
        });
    });




// });