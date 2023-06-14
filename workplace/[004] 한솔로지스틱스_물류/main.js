$( document ).ready(function() {

// header
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


// slick 자동재생 슬라이드
    $('.fade').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
      });

    //slickdot innerhtml 변경
    const slickDots = document.getElementsByClassName('slick-dots')[0];
    const slickDot = slickDots.getElementsByTagName('button')
    for(i=0; i<slickDot.length; i++){
        slickDot[i].innerHTML = '0'+[i+1]
    }
    
// slick 무한루프 슬라이드
    $('.slick-slider1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: 
        [{ breakpoint: 1029, // 반응형: 1029px이하
                settings: { slidesToShow:3
                }
            },
            { breakpoint: 769, // 반응형:769px이하
                settings: { slidesToShow:2
                }
            },
            { breakpoint: 639, // 반응형:639px이하
                settings: { slidesToShow:1
                }
            },
        ]
        });

});