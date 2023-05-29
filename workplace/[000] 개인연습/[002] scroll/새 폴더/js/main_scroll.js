const cont_1 = document.getElementById('cont_1');
const cont_2 = document.getElementById('cont_2');
const slider = document.getElementById('slider');
const s_wid = slider.offsetWidth;
const s_li = slider.children;
const indi_bar = document.getElementById('indi_bar');
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;


// cont_1에서 스크롤 down
// ==> cont_2의 top 0%이동 (나타남)
cont_1.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY > 0){
        cont_2.style.top = `0%`;
    }
});

// cont_2에서 스크롤 up
// ==> cont_2의 top 100%이동 (사라짐)
// s_pos :: 슬라이드 위치
cont_2.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY < 0 && s_pos >= 0){
        setTimeout(()=>{
            cont_2.style.top = `100%`;
        },500);
        return;
    }
    move_slider(e.deltaY);
    console.log(e.deltaY); 
    // => 스크롤한번에 =/-500
    on_indicator();
});
// **setTimeout() : 어떤 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야하는 경우
// setTimeout(() => console.log("2초 후에 실행됨"), 2000);



// 계산된 s_move_max의 값은 -3426.5
// s_pos는 's_pos < s_move_max'가 될 때 까지 (-)150으로 슬라이드 이동
// 's_pos < s_move_max' 가 되면 s_pos = s_move_max로 슬라이드 정지
// 's_pos > 0' 가 되면 s_pos = 0로 슬라이드 정지
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
    // li_upDown(amount);
    
}

// function li_upDown(amount){
//     li_pos += amount;
//     for(let i=0; i<s_li.length; i++){
//         if(i%2 != 0){
//             s_li[i].style.transform = `translateY(${li_pos / (i*5)}px)`;
//         }else{
//             s_li[i].style.transform = `translateY(${-li_pos / (i*5)}px)`;
//         }
//     }
// }

function on_indicator(){
    pct = s_pos * 100 / s_move_max;
    indi_bar.style.clipPath  =`
        polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)
    `;
}