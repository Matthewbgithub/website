$(document).ready(function () {

    var lastScrollTop = 0;
    var scrollDownPos = 0;
    var scrollUpPos = 0;
    var isScrollingDown = true;
	var se = '.ScrollBanner';
	$(window).scroll(function (event) {

		var st = $(window).scrollTop();
		if (st > lastScrollTop) {
//            scrolling down
            if(!isScrollingDown){
                scrollDownPos = st;
            }
            isScrollingDown = true;
			$(se).css('position','absolute');
            $(se).css('transform','translateY('+scrollDownPos+'px)')
            
		} else {
//            scrolling up
            if(isScrollingDown){
                scrollUpPos = st;
                scrollUpPos -= $(se).height();
            }
            isScrollingDown = false;
            $(se).css('transform','translateY('+scrollUpPos+'px)')
            if(st < scrollUpPos){
                $(se).css('transform','translateY(0px)')
                $(se).css('position','fixed');
            }
            
		}
		lastScrollTop = st;
	});


});
