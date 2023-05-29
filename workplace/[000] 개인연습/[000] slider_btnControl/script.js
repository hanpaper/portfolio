// 변수지정
var sliderWrapper = document.getElementsByClassName('container'),
    sliderContainer = document.getElementsByClassName('slider-container'),
    slider = document.getElementsByClassName('slider'),
    sliderCount = slider.length,
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementsByClassName('btn_prev'),
    navNext = document.getElementsByClassName('btn_next');


// 슬라이더 최대 높이를 부모 높이로 지정
function calculateTallestSlide(){
    for(var i=0; i<sliderCount; i++){
        if(slider[i].offsetHeight > topHeight){
            topHeight = slider[i].offsetHeight;
        }
    }
    sliderWrapper[0].style.height = topHeight +'px';
    sliderContainer[0].style.height = topHeight +'px';
};
topHeight = slider.offsetHeight;

//
for( var i = 0; i<sliderCount; i++){
    slider[i].style.left = i*100 + '%';
};


// slider이동
function goToSlider(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    currentIndex = idx;

    updateNav();
};

// 버튼 클릭 시 이벤트
navPrev[0].addEventListener('click',function(e){
    e.preventDefault();
    goToSlider(currentIndex - 1);
});
navNext[0].addEventListener('click',function(e){
    e.preventDefault();
    goToSlider(currentIndex + 1);
});


// 버튼 클릭 제한
function updateNav(){
    if( currentIndex == 0 ){
        navPrev[0].style.display = 'none';
    }else{
        navPrev[0].style.display = 'inline-block';
    }
    if( currentIndex == sliderCount - 1 ){
        navNext[0].style.display = 'none';
    }else{
        navNext[0].style.display = 'inline-block';
    }
}