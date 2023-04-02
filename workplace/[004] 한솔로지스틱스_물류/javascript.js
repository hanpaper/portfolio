$( document ).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').css('background','rgba(0,0,0,.7)')
        }else{
            $('header').css('background','transparent')
        }
    })

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