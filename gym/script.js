var o = $("#optionContainer > .options:nth-child(2) .quotes");
var position = o.position();
var height = position.top - $(window).height() + 865;

function scrollChange() {
    if ($(document).scrollTop() > 300) {
        $("nav").removeClass().addClass("navShort");
    } else {
        $("nav").removeClass().addClass("navLong");
    }

    if ($(document).scrollTop() > 300) {
        $("#headText").addClass("titleGone");
        $("#headImage").addClass("smallImage");
    } else {
        $("#headText,#headImage").removeClass();
    }

    //if scroll is into object o and not past it
    if ($(document).scrollTop() > (height) && ($(document).scrollTop() < (height + o.height() - 200))) {
        $("body, nav").addClass("red");
        $(o).addClass("darkRed");
    } else {
        $("body").removeClass();
        $("nav").removeClass("red");
        $(o).removeClass("darkRed");

    }
}
//OUTPUT OBJECT TO SCROLL INTO HEIGHT
$(document).scroll(function () {
    console.clear();
    console.log("current scroll: " + $(document).scrollTop());
    console.log("position of obj: " + position.top);
    console.log("position changed: " + (height));
    console.log("bottom of object: " + (height + o.height()));
})

//THROTTLE CONTROL
var throttled = _.throttle(scrollChange, 100);
$(document).scroll(throttled);