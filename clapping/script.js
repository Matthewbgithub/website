$(document).ready(function () {

    var lastScrollTop = 0;
    var scrollToPos = 0;
    var isScrollingDown = true;
    var isBetweenScrolling = false;
    var se = '.ScrollBanner';
    //    var bannerHeight = $(se).height();
    var bannerHeight = 40;
    $(window).scroll(function (event) {

        addNavShadow();
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

    function addNavShadow() {
        var element = $('.addScrollShadow');
        var className = 'nav-shadow';
        var offset = 40;
        if ($(window).scrollTop() > offset) {
            element.addClass(className);
        } else {
            element.removeClass(className);
        }
    }

    /*emoji section
    -------------------------------------*/
    $('#emoji-submit').on('click', function () {
        var emojiOutput = $('#emoji-input').val();
        var second = emojiOutput.split(" ");
        var finalOut = "";
        for (var i = 0; i < second.length; i++) {
            finalOut += second[i] + "👏";
        }
        $('#emoji-output').html(finalOut);
        $('#emoji-output').attr('data-clipboard-text', finalOut);


    });
    $('#emoji-output').on('click', function () {
        $('.copy').addClass('visible');
        setTimeout(function () {
            $('.copy').removeClass('visible');
        }, 1000);
    });
    new Clipboard('.btn');
});
