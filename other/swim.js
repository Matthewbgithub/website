$(document).ready(function() {
    
    var wetclass= ".splashzone";
    var maxwater = 200;
    function moisture() {
        if($('.water').length <= maxwater){
            $(wetclass).append('<div style="padding-bottom: '+Math.random()*400+'px"class="water">🌊</div>');
            setTimeout(function(){ moisture(); }, Math.random()*5000);
        }

        
    }
    moisture();
});