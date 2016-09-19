// $(document).ready( function() {
'use strict'



$(window).scroll(function() {
    $('.sectionTitle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).css("visibility", "visible");
            $(this).addClass("rotateIn")
        }
    });
});

$(window).scroll(function() {
    $('.enterLeft').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).css("visibility", "visible");
            $(this).addClass("slideInLeft")
        }
    });
});

$(window).scroll(function() {
    $('.enterRight').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).css("visibility", "visible");
            $(this).addClass("slideInRight")
        }
    });
});

$(window).scroll(function() {
    $('.enterBottom').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).css("visibility", "visible");
            $(this).addClass("slideInUp")
        }
    });
});


$(window).scroll(function() {
    $('.sectionTitle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).css("visibility", "visible");
            $(this).addClass("rotateIn");
        }
    });
});





var images = [], x = -1;
images[0] = "../IMG/avatarscreenshotthree.png";
images[1] = "../IMG/calculatorOne.png";
images[2] = "../IMG/weather_map.png";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("projectImage").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("projectImage").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}



// });