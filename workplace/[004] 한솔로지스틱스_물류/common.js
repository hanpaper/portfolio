$(document).ready(function () {

    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header').css('background', 'rgba(0,0,0,.7)')
        } else {
            $('.header').css('background', 'transparent')
        }
    })

    // btn-top
    const btn_top = document.getElementsByClassName('btn-top')[0];
    btn_top.addEventListener('click', function () {
        window.scrollTo(0, 0);
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY >= 400) {
            btn_top.style.bottom = '20px'
        } else {
            btn_top.style.bottom = '-90px'
        }
    })

    // gnb-mobile
    const body = document.getElementsByTagName('body')[0];
    const header = document.getElementsByClassName('header')[0];
    const btn_allmenu = document.getElementsByClassName('btn-allmenu')[0];
    const gnb_mobile = document.getElementsByClassName('gnb-mobile')[0];

    btn_allmenu.addEventListener('click', function () {
        header.classList.toggle('gnb-mobile-active');
        gnb_mobile.classList.toggle('active');
        body.classList.toggle('overflow-hidden');
    });

    const btn_depth2 = document.getElementsByClassName('btn-depth2');
    const gnb_mobile_li = document.querySelectorAll('.gnb-mobile ul.depth1 > li');
    
    // gnb-mobile 아코디언 메뉴 제어
    for (i = 0; i < btn_depth2.length; i++) {
        btn_depth2[i].addEventListener('click', function (e) {
            if (e.target.parentNode.classList.contains('active') === false) {
                for (k = 0; k < gnb_mobile_li.length; k++) {
                    gnb_mobile_li[k].classList.remove('active')
                }
                e.target.parentNode.classList.add('active');
            } else {
                e.target.parentNode.classList.remove('active');
            }
        })
    };

});