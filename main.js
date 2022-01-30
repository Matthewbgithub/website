$(document).ready(function() {
    
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    var $window = $(window).scroll(function(){
        var percentDown = (document.documentElement.scrollTop/(height-window.innerHeight))
        console.log(percentDown)
        var percentUp = 1-percentDown
        document.getElementsByClassName("background")[0].style.transform = "translateY(-"+(percentUp*100)+"vh)"
    });
    
    $('.option').on('click', function(){
        window.location.href = $(this).attr('link');
    })
    
    $('.topBox').on('click', function(){
        window.location.href = "/info.html";
    })
});