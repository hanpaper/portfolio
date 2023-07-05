$(document).ready(function () {

    // slick 자동재생 슬라이드
    $('.slide-slick__fade').slick({
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
    for (i = 0; i < slickDot.length; i++) {
        slickDot[i].innerHTML = '0' + [i + 1]
    }

    // slick 무한루프 슬라이드
    $('.slide-slick__card').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive:
            [{
                breakpoint: 1640,
                settings: {
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 1029, // 반응형: 1029px이하
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 769, // 반응형:769px이하
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 639, // 반응형:639px이하
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true

                }
            },
            ]
    });



});