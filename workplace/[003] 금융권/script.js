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
  
          // menubar - popup
        $('.menu .btn_search').click(function(){
            if($('.popup').css("display") === 'none'){
                $('.popup').css("display","block");
                $('.popup_search').css("display","block");
                $('body').css("overflow","hidden")
            }else{
                $('.popup').css("display","none");
                $('.popup_search').css("display","none");
                $('body').css("overflow","auto")
            }
        });
        

        $('.menu .btn_menu').click(function(){
                $('.popup').css("display","block");
                $('.popup_magamenu').css("display","block");
                $('body').css("overflow","hidden")
        });


        $('.popup .btn_close').click(function(){
                $('.popup').css("display","none");
                $('.popup_search').css("display","none");
                $('.popup_magamenu').css("display","none");
                $('body').css("overflow","auto")
            })
    });
