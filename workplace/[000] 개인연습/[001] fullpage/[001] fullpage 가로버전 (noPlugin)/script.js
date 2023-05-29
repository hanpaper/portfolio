$(document).ready(function(){

        
            function tmp() {
                // container의 가로사이즈(화면가로 * box 개수)
                // 화면가로 => outerWidth(border포함 가로 크기)로 측정
                let con_width = $(window).outerWidth() * $('.box').length; 

                $('.container').css({
                    width: con_width,
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0
                });

                // css에서 해도 상관없다.
                $('.box').css({
                    width: con_width / $('.box').length,
                    height: '100vh',
                    float: 'left'
                });

                // box들을 위로 끌어올렸기 때문에 body의 높이는 100vh나 마찬가지인 상태. 
                // 그래서 억지로 전체 box들의 세로크기 만큼 body에 줘야한다.(스크롤 내리기위함) 
                // 이때 높이는 가로영역의 비율과 동일하게 준다. (이후 리미트를 주게 됨으로써 비율의 값이 정해진다.)
                $('body').css({
                    height: '100vh'
                });

                let w_width = $(window).width(); // 화면의 가로값
                let w_height = $(window).height() // 화면의 세로값

                // 스크롤 될때의 리미트
                d_width = con_width - w_width; // 전체 가로값 - 현재 화면의 가로값
                d_height = $('body').height() - w_height // 전체 세로값 - 현재 화면의 세로값
            }

            tmp();
 
            let array = [];
            for(let i=0; i<$('.box').length; i++) {
                array[i] = $('.box').eq(i).offset().left
            }
            // .eq() 메서드는 선택한 요소에 인덱스 번호에 해당하는 요소를 찾습니다.

            let chk = true;
            $('.box').on('mousewheel DOMMouseScroll', function(){
                //익스, 크롬, 사파리, 오페라 : mousewheel
                // 파이어폭스 : DOMMouseScroll
                // mousewheel 과 DOMMouseScroll 이벤트 두개를 동시에 걸어주는 메서드 .on() 사용

                if(chk) {
                    // 휠 일정시간동안 막기
                    chk = false;
                    setTimeout(function(){
                        chk = true;
                    }, 500)

                    // 휠 방향 감지(아래: -120, 위: 120)
                    let w_delta = event.wheelDelta / 120;
                    
                    // 휠 아래로
                    if(w_delta < 0 && $(this).next().length > 0) {
                        // .next : 다음 형제 엘리먼트 지목
                        // && : 모두 참 일때,

                        $('.container').animate({
                            left: -array[$(this).index()+1]
                        }, 500)
                    }
                    // 휠 위로
                    else if(w_delta > 0 && $(this).prev().length > 0) {
                        $('.container').animate({
                            left: -array[$(this).index()-1]
                        }, 500)
                    }
                }
            });

			//브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
            $(window).resize(function(){
                for(let i=0; i<$('.box').length; i++) {
                    array[i] = $('.box').eq(i).offset().left
                }

                tmp();
            })

        });