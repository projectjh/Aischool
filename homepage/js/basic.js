//scroll-menu
$(function(){
    $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.btn-up').css('opacity','1');
            } else {
                $('.btn-up').css('opacity','0');
            }
        });

    //btn-up
    $('.btn-up').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });

    $('#menu ul li:not(.link-login').click(function(){
        alert('준비중입니다.');
    });
});