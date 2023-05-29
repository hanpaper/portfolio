$(document).ready(function(){

    // (1) scrollbox 관련
    $('.scrollbox').width('100vh');
    $('.scrollbox').height($('.box').width());


    // $(window).scroll(function(){
    //     if($('.scrollbox').parent().offset().top <= $(window).scrollTop()){
    //         $(window).scrollTop(($('.scrollbox').parent().offset().top));
    //         $('.scrollbox').css('overflow','scroll');
    //     }else{
    //         $('.scrollbox').css('overflow','hidden');
    //     };
    // })







    // (2) slider 관련
    const cont_2 = document.getElementById('cont_2');
    const slider = document.getElementById('slider');
    const s_wid = slider.offsetWidth;
    const s_li = slider.children;
    let win_wid = window.innerWidth;
    let s_move_max = (s_wid - (win_wid/2)) * -1;
    let s_pos = 0;
    let li_pos = 0;
    let pct = 0;
    
    
    //cont_2가 offset=0이 됐을 때, 스크롤 기능 제거한다.
    $(function () {
        $(window).scroll(function(){
            if($('#cont_2').offset().top <= $(window).scrollTop() ){
            $(window).scrollTop() == $('#cont_2').offset().top;
            }else{

            }
        });
    });

    cont_2.addEventListener('wheel',function(e){
        e.preventDefault;
        move_slider(e.deltaY);
        console.log(e.deltaY); 
        // => 스크롤한번에 =/-500
    });

    
    
    function move_slider(amount){
        s_pos -= amount;
        if(s_pos < s_move_max){
            s_pos = s_move_max;
            return;
        }else if(s_pos > 0){
            s_pos = 0;
            return;
        }
        slider.style.transform = `translateX(${s_pos}px)`;

        
    }








    


});