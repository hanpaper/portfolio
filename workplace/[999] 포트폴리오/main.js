$(document).ready(function() {

    $.ajax({
        method: "GET",
        url: "https://www.tistory.com/apis/post/list?access_token=ca6a73de64c77ff2b3561c3b56506003_5e001e572ee39e409fd2fa36c4fbc3d9&output=xml&blogName=chjy0124&page=1",
      })
        .done(function( msg ) {
            // console.log(msg);

            const blogTitle = document.getElementsByClassName('blogTitle')
            const blogDate = document.getElementsByClassName('blogDate')
            const blogUrl = document.getElementsByClassName('blogUrl')
            for(i=0 ; i < blogTitle.length ; i++){
                blogTitle[i].innerHTML = msg.getElementsByTagName('title')[i].innerHTML;
                blogDate[i].innerHTML = msg.getElementsByTagName('date')[i].innerHTML;
                blogUrl[i].href = msg.getElementsByTagName('postUrl')[i].innerHTML;
            }
        });
    
// scroll 기능
    const body = document.getElementsByTagName('body')[0];
    const main = document.getElementsByTagName('main')[0];
    var header = document.querySelector('header');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const sec = part2.getElementsByClassName('section');
    const works = document.getElementsByClassName('works')[0];
    const contBox = works.getElementsByClassName('contentBox')[0];
    const scrollBox = document.getElementById('scrollBox');
    let a = 0;
    let k = 0;


    body.addEventListener('wheel', function(e){
        
        if(works.offsetTop*-1 + 'px' === part2.style.top && a < 0 && a > -900 ||
        works.offsetTop*-1 + 'px' === part2.style.top && a === 0 && e.deltaY > 0 || 
        works.offsetTop*-1 + 'px' === part2.style.top && a === -900 && e.deltaY < 0)
        {
            scrollRow(e.deltaY);
            return;
        }else if(works.offsetTop*-1 + 'px' === part2.style.top && a === 0 && e.deltaY < 0 || 
        works.offsetTop*-1 + 'px' === part2.style.top && a === -1200 && e.deltaY > 0){
            move_slider(e.deltaY);
        };
        
        move_slider(e.deltaY);
        move_typo(e.deltaY);
        
        console.log('마우스:' + e.deltaY);
    });
    

    function move_slider(amount){
        k += amount;

        console.log('k값:' + k);
        
        for(i=0 ; i < sec.length ; i++){ // 섹션구간정지
            
            if( sec[i].offsetTop - 150 < k && k < sec[i].offsetTop && amount > 0 ||
            sec[i].offsetTop < k && k < sec[i].offsetTop + 150 && amount < 0 ){
                part2.style.top = -sec[i].offsetTop + 'px';
                k = sec[i].offsetTop;
            };
        };

        if(k < 0){ // 시작점
            k=0;
            return;
        }
        else if( k > sec[sec.length-1].offsetTop + sec[sec.length-1].offsetHeight - window.innerHeight ){ // 종료점
            k = sec[sec.length-1].offsetTop + sec[sec.length-1].offsetHeight - window.innerHeight ;
            return;
        };

        part2.style.top = - k + 'px';
        console.log('part2 top값:' + sec[1].offsetTop);
    };



     function scrollRow(amount){
        a -= amount;        
        if(a > 0){
            a = 0;
            return;
        }else if(a < -900){
            a = -900;
        };
        scrollBox.style.left = a + 'px';
        return;
    }





    // typo position
    const typoIam = document.getElementById('typo_iam');
    const typoStart = document.getElementById('typo_start');

    
    sec[0].style.height = 'calc(100% + '+typoStart.offsetWidth+'px)'
    typoIam.style.left = 'calc(50% + '+typoIam.offsetHeight+'px)';
    typoIam.style.bottom = 'calc(100% - 274px)';

    typoStart.style.right = - typoStart.offsetWidth + typoStart.offsetHeight/2 + 'px';
    


    let m = 274
    

    function move_typo(amount){
        m += amount 
        
        
        if(m < 274){
            m=274;
            return;
        }
        typoIam.style.bottom = 'calc(100% - '+m+'px)';
        
        return;
    };



    // header
    setInterval(function(){

    scrollBox.style.paddingLeft = contBox.offsetLeft + 30 + 'px';
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



    // works datail window
    // document.getElementById('hansol').addEventListener('click', function(){
    //     document.getElementById('detailWin').style.opacity = '1'
    //     document.getElementById('detailWin').style.pointerEvents = 'all';
    //     document.getElementById('detailHansol').style.right = '0px';
    // });
    // document.getElementById('btn_close').addEventListener('click', function(){
    //     document.getElementById('detailWin').style.opacity = '0'
    //     document.getElementById('detailWin').style.pointerEvents = 'none';
    //     document.getElementById('detailHansol').style.right = '-100%';
    // });
// 
    // document.getElementById('bank').addEventListener('click', function(){
    //     document.getElementById('detailWin').style.opacity = '1'
    //     document.getElementById('detailWin').style.pointerEvents = 'all';
    //     document.getElementById('detailBank').style.right = '0px';
    // });
    // document.getElementById('btn_close').addEventListener('click', function(){
    //     document.getElementById('detailWin').style.opacity = '0'
    //     document.getElementById('detailWin').style.pointerEvents = 'none';
    //     document.getElementById('detailBank').style.right = '-100%';
    // });



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
