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
    
    $('.option').on('click', function(){
        window.location.href = $(this).attr('link');
    })
    
    $('.topBox').on('click', function(){
        window.location.href = "/info.html";
    })
});