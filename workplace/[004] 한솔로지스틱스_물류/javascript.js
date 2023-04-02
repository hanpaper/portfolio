$( document ).ready(function() {
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