$( document ).ready(function() {

    //top button
    $('.quickmenu').click(function(){
        window.scrollTo(0,0)
    })
    
    //slider
    var swiper = new Swiper(".swiper_type1", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
          
          var swiper = new Swiper(".swiper_type2", {
          slidesPerView: 6,
          navigation: {
              nextEl: ".btn_next_type2",
              prevEl: ".btn_prev_type2",
          }
          });



          $(".bxslider_type1").bxSlider({
            mode: 'vertical',
            pager: false,

            auto:true,
            pause:2500,
          });
  
          
    });
