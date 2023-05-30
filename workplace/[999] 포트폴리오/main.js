$(document).ready(function() {

// scroll 기능
    const body = document.getElementsByTagName('body')[0]
    const main = document.getElementsByTagName('main')[0];
    const sec = document.getElementsByClassName('section')
    let k = 0;


    body.addEventListener('wheel', function(e){
        move_slider(e.deltaY);
        console.log('마우스:' + e.deltaY);
    });


    function move_slider(amount){
        k += amount;
        
        if(k < 0){ // 시작점
            k=0;
        }
        else if( k > sec[sec.length-1].offsetTop + sec[sec.length-1].offsetHeight - window.innerHeight){ // 종료점
            k = sec[sec.length-1].offsetTop + sec[sec.length-1].offsetHeight - window.innerHeight;
        };
        
        for(i=1 ; i < sec.length ; i++){ // 섹션구간정지
            if( sec[i].offsetTop - 150 < k && k < sec[i].offsetTop ||
            sec[i].offsetTop < k && k < sec[i].offsetTop + 150 ){
                k = sec[i].offsetTop ;
            }
        };

        main.style.transform = 'translateY('+k*-1+'px)';
        console.log('k값:' + k)
    };



    // header
    var header = document.querySelector('header')
    setInterval(function(){
        if(k > 0){
            header.setAttribute('class','scroll')
        }else{
            header.removeAttribute('class','scroll')
        }
    });



    // scroll 기능 제거
    $('main').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    // scroll 기능 풀기
    $('main').off('scroll touchmove mousewheel');

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



    // works datail window
    document.getElementById('hansol').addEventListener('click', function(){
        document.getElementById('detail_hansol').style.display = 'block';
    });
    document.getElementById('btn_close').addEventListener('click', function(){
        document.getElementById('detail_hansol').style.display = 'none';
    });



    // infinite slider 기능
    var bannerLeft=0;
    var first=1;
    var last;
    var sliderNum=0;
    var slider = $(".infSlider");
    var $first;
    var $last;

    slider.each(function(){   // 20px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+120;
        $(this).attr("id", "banner"+(++sliderNum));  // slider에 id 속성 추가
    });


    if( sliderNum > 3){          //배너 3개 이상일 때, 작동시켜라

        last = sliderNum;

        setInterval(function() {
            slider.each(function(){
                $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
            });

            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -700) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width()+120);
                first++; // +1한 뒤, $first = $("#banner"+first);에 대입 (banner1이 뒤로가면서 banner2가 $first가 됨)
                last++;
                if(last > sliderNum) { last=1; }   
                if(first > sliderNum) { first=1; }
            }
        }, 10);     //속도를 조정          

    };







});
