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

// header - gnb
const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByTagName('header')[0];
const header_logo = header.getElementsByClassName('logo')[0];
const header_nav = header.getElementsByTagName('nav')[0];
const header_lang = document.getElementsByClassName('header__lang')[0];
const sub_gnb = document.getElementsByClassName('sub-gnb')[0];
const header_menu = document.getElementsByClassName('header__menu')[0];

header_menu.addEventListener('click',function(){
    header_menu.classList.toggle('active');
    header_lang.classList.toggle('header__menu-active');
    sub_gnb.classList.toggle('active');
    
    if( sub_gnb.classList.contains('active') === true ){
        body.style.overflow = 'hidden'
        header_logo.style.display = 'none'
        header_nav.style.display = 'none'
    }else{
        body.style.overflow = 'auto'
        header_logo.style.display = 'inline-block'
        header_nav.style.display = 'inline'
    }
});

const btn_submenu = document.querySelectorAll('.btn-submenu')

for(i=0 ; i < btn_submenu.length ; i++){
    btn_submenu[i].addEventListener('click', function(){
        this.parentNode.classList.toggle('active');
        console.log(this.parentNode);
        let a = this.parentNode;
    });
}


// slick 자동재생 슬라이드
    $('.slide-slick1').slick({
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
    $('.slide-slick2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: 
        [{breakpoint: 1640, // 반응형: 1640px이하
                 settings: { arrows: false,
                              dots: true

                }
            },
            {breakpoint: 1029, // 반응형: 1029px이하
                settings: { slidesToShow:3,
                    arrows: false,
                              dots: true

                }
            },
            { breakpoint: 769, // 반응형:769px이하
                settings: { slidesToShow:2,
                    arrows: false,
                              dots: true

                }
            },
            { breakpoint: 639, // 반응형:639px이하
                settings: { slidesToShow:1,
                              arrows: false,
                              dots: true

                }
            },
        ]
        });

});