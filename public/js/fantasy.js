// $(document).ready( function() {
    'use strict'

    $(window).scroll(function() {
        console.log('in scroll');
        $('.sectionTitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).css("visibility", "visible");
                $(this).addClass("rotateIn")
            }
        });
    });

setInterval(function(){
    $('#projectImage').attr('src','IMG/bodiam_castle.jpg')
    }, 3000);

setInterval(function(){
    $('#projectImage').attr('src','IMG/$_32.jpeg')
}, 6000);


// });