//$.noConflict();

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
    
   
});
