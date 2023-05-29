window.onload = function() {
        var bannerLeft=0;
        var first=1;
        var last;
        var sliderNum=0;
        var slider = $(".slider");
        var $first;
        var $last;

        slider.each(function(){   // 20px 간격으로 배너 처음 위치 시킴
            $(this).css("left",bannerLeft);
            bannerLeft += $(this).width()+20;
            $(this).attr("id", "banner"+(++sliderNum));  // slider에 id 속성 추가
        });


        if( sliderNum > 3){                //배너 3개 이상일 때, 작동시켜라

            last = sliderNum;

            setInterval(function() {
                slider.each(function(){
                    $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
                });

                $first = $("#banner"+first);
                $last = $("#banner"+last);
                if($first.position().left < -500) {    // 제일 앞에 배너 제일 뒤로 옮김
                    $first.css("left", $last.position().left + $last.width()+20);
                    first++; // +1한 뒤, $first = $("#banner"+first);에 대입 (banner1이 뒤로가면서 banner2가 $first가 됨)
                    last++;
                    if(last > sliderNum) { last=1; }   
                    if(first > sliderNum) { first=1; }
                }
            }, 5);     //속도를 조정          

        }

};