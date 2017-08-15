$(document).ready(function() {
    
    var wetclass= ".splashzone";
    var maxwater = 75;
    function moisture() {
        if($('.water').length <= maxwater){
            $(wetclass).append('<div style="padding-bottom: '+Math.random()*400+'px; opacity: '+Math.random()+'; font-size: '+Math.random()*6+'rem;"class="water">🌊</div>');
            setTimeout(function(){ moisture(); }, Math.random()*5000);
        }
    }
    moisture();
});