$(document).ready(function () {

    // snb-menu
    const snb_btn = document.querySelectorAll('.snb__btn button')
    for (i = 0; i < snb_btn.length; i++) {
        snb_btn[i].addEventListener('click', function(e) {
            if( e.target.parentNode.classList.contains('active') === false ){
                for (k = 0; k < snb_btn.length; k++) {
                    snb_btn[k].parentNode.classList.remove('active');
                }
                e.target.parentNode.classList.add('active');
            }else{
                e.target.parentNode.classList.remove('active');
            }
        });
    }

});