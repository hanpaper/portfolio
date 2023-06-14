$(document).ready(function () {


    // 티스토리 오픈 api
    $.ajax({
        method: "GET",
        url: "https://www.tistory.com/apis/post/list?access_token=ca6a73de64c77ff2b3561c3b56506003_5e001e572ee39e409fd2fa36c4fbc3d9&output=xml&blogName=chjy0124&page=1",
    })
        .done(function (msg) {
            // console.log(msg);

            const blogTitle = document.getElementsByClassName('blogTitle')
            const blogDate = document.getElementsByClassName('blogDate')
            const blogUrl = document.getElementsByClassName('blogUrl')
            for (i = 0; i < blogTitle.length; i++) {
                blogTitle[i].innerHTML = msg.getElementsByTagName('title')[i].innerHTML;
                blogDate[i].innerHTML = msg.getElementsByTagName('date')[i].innerHTML;
                blogUrl[i].href = msg.getElementsByTagName('postUrl')[i].innerHTML;
            }
        });





    // scroll 기능
    const body = document.getElementsByTagName('body')[0];
    const main = document.getElementsByTagName('main')[0];
    const header = document.querySelector('header');
    const sec =document.getElementsByClassName('section');

    const works = document.getElementsByClassName('works')[0];
    const scrollBox = document.getElementById('scrollBox');


    
    

    // works 가로 스크롤
    // 1. works 가로 스크롤 - 왼쪽 여백
    setInterval(function(){
        const works_Left = works.getElementsByTagName('h2')[0].offsetLeft;
        scrollBox.style.paddingLeft = works_Left + 'px';
        works.style.height = scrollBox.scrollWidth + 'px';
        });


    // 2. works 가로 스크롤 - scroll 이벤트

    let preScrollTop = 0;

    window.addEventListener('scroll', () => {
        let nextScrollTop = window.scrollY;
        console.log(window.scrollY);


        const scr = window.scrollY
        const works_h = sec[2].offsetTop

        let offset = scr - works_h
        if (scr > works_h) {
            scrollBox.style.transform = 'translateX('+-1*offset+'px)';
            console.log('offset:'+offset);
            console.log('transform:'+scrollBox.style.transform);
        }
        
        // if (preScrollTop < nextScrollTop) {
        //     console.log('Down!');
        //     
        //     // window.scrollTo(0, sec[1].offsetTop)
        // }
        // else { // (preScrollTop > nextScrollTop)
        //     console.log('Up!');
        // }
        // preScrollTop = nextScrollTop;
    });









    // scroll 기능 제거
    // $('main').on('scroll touchmove mousewheel', function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     return false;
    // });

    // scroll 기능 풀기
    // $('main').off('scroll touchmove mousewheel');

    // scroll 기능 제거 (function으로 빼기)
    // function scroll_on() {
    //     $('main').on('scroll touchmove mousewheel', function(e) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         return false;
    //     });
    // };




    // offset()측정
    // setInterval(function(){
    //     console.log('맨위에서 section까지의 거리 :'+$('.works').offset().top);
    //     console.log('스크롤된 정도:'+$(window).scrollTop());
    // },2000);



    // 상세페이지
    const detailHansol = document.getElementById('detailHansol');
    const detailBank = document.getElementById('detailBank')
    const detailStarbucks = document.getElementById('detailStarbucks')
    const detailBankmobile = document.getElementById('detailBankmobile')
    const detailPortfolio = document.getElementById('detailPortfolio')
    
    // 1. 상세페이지 - 한솔
    document.getElementById('hansol').addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '1'
        document.getElementById('detailWin').style.pointerEvents = 'all';
        detailHansol.style.right = '0px';
    });
    detailHansol.getElementsByClassName('btn_close')[0].addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '0'
        document.getElementById('detailWin').style.pointerEvents = 'none';
        detailHansol.style.right = '-100%';
    });
    
    // 2. 상세페이지 - 금융권
    document.getElementById('bank').addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '1'
        document.getElementById('detailWin').style.pointerEvents = 'all';
        detailBank.style.right = '0px';
    });
    detailBank.getElementsByClassName('btn_close')[0].addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '0'
        document.getElementById('detailWin').style.pointerEvents = 'none';
        detailBank.style.right = '-100%';
    });

    // 3. 상세페이지 - 포트폴리오
    // document.getElementById('portfolio').addEventListener('click', function(){
    //     document.getElementById('detailWin').style.opacity = '1'
    //     document.getElementById('detailWin').style.pointerEvents = 'all';
    //     detailPortfolio.style.right = '0px';
    // });
    // detailPortfolio.getElementsByClassName('btn_close')[0].addEventListener('click', function(){
    //     document.getElementById('detailWin').style.opacity = '0'
    //     document.getElementById('detailWin').style.pointerEvents = 'none';
    //     detailPortfolio.style.right = '-100%';
    // });

    // 3. 상세페이지 - 스타벅스
    document.getElementById('starbucks').addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '1'
        document.getElementById('detailWin').style.pointerEvents = 'all';
        detailStarbucks.style.right = '0px';
    });
    detailStarbucks.getElementsByClassName('btn_close')[0].addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '0'
        document.getElementById('detailWin').style.pointerEvents = 'none';
        detailStarbucks.style.right = '-100%';
    });


    // 4. 상세페이지 - 금융권 모바일
    document.getElementById('bankMobile').addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '1'
        document.getElementById('detailWin').style.pointerEvents = 'all';
        detailBankmobile.style.right = '0px';
    });
    detailBankmobile.getElementsByClassName('btn_close')[0].addEventListener('click', function(){
        document.getElementById('detailWin').style.opacity = '0'
        document.getElementById('detailWin').style.pointerEvents = 'none';
        detailBankmobile.style.right = '-100%';
    });



    // infinite slider 기능
    let bannerLeft = 0;
    let first = 1;
    let last;
    let sliderNum = 0;
    let slider = $(".infSlider");
    let $first;
    let $last;

    slider.each(function () {   // 20px 간격으로 배너 처음 위치 시킴
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width() + 120;
        $(this).attr("id", "banner" + (++sliderNum));  // slider에 id 속성 추가
    });


    if (sliderNum > 3) {          //배너 3개 이상일 때, 작동시켜라

        last = sliderNum;

        setInterval(function () {
            slider.each(function () {
                $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
            });

            $first = $("#banner" + first);
            $last = $("#banner" + last);
            if ($first.position().left < -700) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width() + 120);
                first++; // +1한 뒤, $first = $("#banner"+first);에 대입 (banner1이 뒤로가면서 banner2가 $first가 됨)
                last++;
                if (last > sliderNum) { last = 1; }
                if (first > sliderNum) { first = 1; }
            }
        }, 10);     //속도를 조정          

    };







});
