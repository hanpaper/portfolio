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

// snb-menu
    const snb_menu = document.querySelectorAll('.snb_menu button')
    for(i=0; i<snb_menu.length; i++){
        snb_menu[i].addEventListener('click', function(){
            this.parentNode.classList.toggle('active')
        });     
    }

});