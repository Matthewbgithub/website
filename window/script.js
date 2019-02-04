console.log("js loaded");

var dragElem = '#draggable';
var moveElem = $(dragElem).parent();
//make sure position styles are set correctly
$(moveElem).css('position','relative');
if( parseInt( $(moveElem).css('top') )==0 || parseInt( $(moveElem).css('left') ) ==0){
    console.log($(moveElem).css('top'));
    $(moveElem).css('top', '0px');
    $(moveElem).css('left', '0px');
}
var mouseXDifference;
var mouseYDifference;

$(dragElem).mousedown(function(){
    $(dragElem).addClass('dragging');
    var mouseXStart = event.clientX;
    var mouseYStart = event.clientY;
    var elementYStart = parseInt($(moveElem).css('top'));
    var elementXStart = parseInt($(moveElem).css('left'));
    
    mouseXDifference = mouseXStart - elementXStart;
    mouseYDifference = mouseYStart - elementYStart;
    
})
$(window).mousemove(function(){
    if($(dragElem).hasClass('dragging')){
        var newY = event.clientY - mouseYDifference;
        var newX = event.clientX - mouseXDifference;
        $(moveElem).css('top', newY);
        $(moveElem).css('left', newX);
    }
})
$(window).mouseup(function(){
    $(dragElem).removeClass('dragging');
})