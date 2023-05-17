$( document ).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').css('background','rgba(0,0,0,.7)')
        }else{
            $('header').css('background','transparent')
        }
    })

    $('.btn_up').click(function(){
        window.scrollTo(0, 0)
    })



    $(".slider").bxSlider({
        auto: true,
        mode: 'fade',
        controls: false,
        speed: 1000,
        infiniteLoop: true,
    });    
    $('.bx-viewport').css('height','100%');
    $('.bx-pager-link').prepend('0');
    

    $('.jq_slider1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
        });


    var swiper = new Swiper(".mySwiper", {
    
        effect: "fade",

        autoplay: {
        delay: 2000,
        disableOnInteraction: false
        }

        });

});