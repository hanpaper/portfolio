$(document).ready(function() {

// header
var header = document.querySelector('header')
setInterval(function(){
    if(pageYOffset > 0){
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


// visual event
// 1. 마우스 휠을 내렸을 때
// 2. 요소에 (관련 이벤트를 담은) 클래스'eventOn'을 추가한다.
var a = document.getElementsByClassName('about')[0];
a.addEventListener('wheel' , function(e){
    e.preventDefault;
    var t = document.getElementsByClassName('eventOff');
    t[0].className += ' eventOn';
    t[1].className += ' eventOn';
});


// 특정 위치에서 scroll 정지, 가로 스크롤 작동
// 1. window.offset()가 a에 도달했을 때,
// 2. 마우스 휠 이벤트를 중지한다
// setInterval(function(){
//     if ($(window).scrollTop() >= 925.3333358764648){
//         $(window).scrollTop(925.3333358764648,0);
// 
//         $('main').on('scroll touchmove mousewheel', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             return false;
//         });
//     }
// });


var b = $('.works').offset().top;
    var a = $('.works').offset().top - 150;
    var c = document.getElementsByClassName('works')[0];
    
setInterval(function(){

    if ($(window).scrollTop() > a){
        c.scrollIntoView({behavior:"smooth"});
    }
});








// scroll 기능 제거 (function으로 빼기)
// function scroll_on() {
//     $('main').on('scroll touchmove mousewheel', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     });
// };




// offset()측정
setInterval(function(){
    //console.log('맨위에서 section까지의 거리 :'+$('.works').offset().top);
    //console.log('스크롤된 정도:'+$(window).scrollTop());
},2000);






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




// fullpage 기능
// $('#fullpage').fullpage({
//     //options here
//     anchors: ['section1', 'section2', 'section3','section4'],
// 
//     
//     afterLoad: function(anchorLink, index){
//         console.log('현재 섹션 번호는?' + index)
//     },
//     
//     afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
//         console.log('현재 슬라이드 번호는?' + slideIndex)
//     },
// 
// });

});
