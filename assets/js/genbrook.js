/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="jquery.visible.min.js" />

$(document).ready(function($){
   
    
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
    /*if($(window).scrollTop() == 100){
        alert('we are here!');
    }*/
    
    $.getScript('jquery.visible.min.js', function(){
        
       
        
    });
   
    
    
    
   
    
   
});
