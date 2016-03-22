$(document).ready(function () {
    /*$('.my-click').popover({
     title: "<h1><strong>HTML</strong> inside <code>the</code> <em>popover</em></h1>", 
     content: "Blabla <br> <h2>Cool stuff!</h2>",
     html: true, 
     placement: "bottom",
     trigger:'hover',
     delay: {show:200, hide:2000}
     });

     $('.my-click').popover({
     title: "<h1><strong>HTML</strong> inside <code>the</code> <em>popover</em></h1>", 
     content: "Blabla <br> <h2>Cool stuff!</h2>",
     html: true, 
     placement: "bottom",
     trigger:'focus',
     delay: {show:200, hide:2000}
     });*/

    // get width of window
    var w = $('#navcol-top').width();

    $('.my-click').on({
        mouseenter: function () {
            if (w > 425) {
                $('ul#nav-wrapper').toggleClass("appear");
            } else {
                alert('wrong');

            }

        },
        hover: function () {
            if (w > 425) {
                $('ul#nav-wrapper').toggleClass("appear");
            } else {
                alert('wrong');

            }
        },
        focus: function () {
            if (w > 425) {
                $('ul#nav-wrapper').toggleClass("appear");
            } else {
                alert('wrong');

            }
        }
    })

});