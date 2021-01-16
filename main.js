$(document).ready(function() {
    
    $('.bigbox').on('mouseover', function(e) {
    if (e.target === this) {
        $(this).removeClass("transparent");
            $(this).addClass("expandbox");
      }
    })
    .on('mouseout', function() {
      $(this).addClass('transparent');
        $(this).removeClass("expandbox");
    });
    var $window = $(window).scroll(function(){
        if ($window.scrollTop() > $(window).height()){
            $('body').addClass('scrolledOnePage');
            console.log("scrolled");
        }else{
            $('body').removeClass('scrolledOnePage');
        }
    });
    
    $('.option').on('click', function(){
        window.location.href = $(this).attr('link');
    })
    
    $('.topBox').on('click', function(){
        window.location.href = "/info.html";
    })
    /*$('.option').css('color', $(this).attr('col'));
    $('.option').css('border-bottom-color', $(this).attr('col'));*/
});