$(document).ready(function () {

    var lastScrollTop = 0;
    var scrollToPos = 0;
    var isScrollingDown = true;
    var isBetweenScrolling = false;
    var se = '.ScrollBanner';
    //    var bannerHeight = $(se).height();
    var bannerHeight = 40;
    $(window).scroll(function (event) {

        var st = $(window).scrollTop();
        //        console.log(isBetweenScrolling + " - to: " + scrollToPos + ", at: " + st);
        if (st > lastScrollTop) {
            //            scrolling down
            if (!isScrollingDown) {

                if (!isBetweenScrolling) {
                    scrollToPos = st;
                }
            }
            isBetweenScrolling = true;
            isScrollingDown = true;
            $(se).css('position', 'absolute');
            $(se).css('transform', 'translateY(' + scrollToPos + 'px)');

            if (st > (scrollToPos + bannerHeight)) {
                //when scrolling down finshes
                isBetweenScrolling = false;
                $(se).css('transform', 'translateY(-' + bannerHeight + 'px)')
                $(se).css('position', 'fixed');
            }
        } else {
            //            scrolling up

            if (isScrollingDown) {
                if (!isBetweenScrolling) {
                    scrollToPos = st;
                    scrollToPos -= bannerHeight;
                }
                $(se).css('position', 'absolute');
            }
            isBetweenScrolling = true;
            isScrollingDown = false;
            $(se).css('transform', 'translateY(' + scrollToPos + 'px)');

            if (st < scrollToPos) {
                isBetweenScrolling = false;
                $(se).css('transform', 'translateY(0px)')
                $(se).css('position', 'fixed');
            }
        }
        lastScrollTop = st;
    });


});
