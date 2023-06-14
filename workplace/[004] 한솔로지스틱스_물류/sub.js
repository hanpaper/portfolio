$( document ).ready(function() {

    // snb-menu
    const snb_menu = document.querySelectorAll('.snb_menu button')
    for(i=0; i<snb_menu.length; i++){
        snb_menu[i].addEventListener('click', function(){
            this.parentNode.classList.toggle('active')
        });     
    }

});