$( document ).ready(function() {

// header
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){
                $('header').css('background','rgba(0,0,0,.7)')
            }else{
                $('header').css('background','transparent')
            }
        })
    
        $('.btn_up').click(function(){
            window.scrollTo(0, 0)
        })

// list-snb
    const snb_list = document.querySelectorAll('.snb button')
    for(i=0; i<snb_list.length; i++){
        snb_list[i].addEventListener('click', function(){
            this.parentNode.classList.toggle('active')
        });     
    }

});