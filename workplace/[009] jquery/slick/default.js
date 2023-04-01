$( document ).ready(function(){
    $('.visual').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.play').on('click', function(){
        $('.visual').slick('slickPlay');
    });
    $('.pause').on('click', function(){
        $('.visual').slick('slickPause');
    });
});
