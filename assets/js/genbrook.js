/// <reference path="../../typings/jquery/jquery.d.ts" />

$(document).ready(function(){
   
    
    // get width of window
    var w = $('#navcol-top').width();
    
    var timer;
    $('.my-click').on({
       mouseenter: function(){
           if(w > 425){
               var self = this;
               clearTimeout(timer);
               timer = setTimeout(function(){
                   $(self).children('ul#nav-wrapper').removeClass('appear');
               }, 100)
           }
           
       },
        mouseleave: function(){
            if( w > 425){
                var self = this;
            setTimeout(function(){
                if(!$(self).children('ul#nav-wrapper').is(":hover")){
                    $(self).children('ul#nav-wrapper').addClass('appear');
                }
            }, 100);
            }
            
        }
    });
    
   // $('#black-contact').isInViewport({tolerance: -50}).css('border', '3px solid #000000');
    /*if($(window).scrollTop >= $('#port-col').height()){
        alert('we are here!');
    }*/

    /*alert($('#port-col').height());
    alert($(window).height());
    alert($(document).height());
    */

    /*window.scrollBy(1338, 1338);
        alert(window.pageXOffset);
        alert(window.pageYOffset);
*/

    function navSlide() {
        var scroll_top = $(window).scrollTop();

        if(scroll_top >= 1338){
            alert('we are here!');
        }
    }

    $(window).scroll(navSlide);
    
   
    
   
});
