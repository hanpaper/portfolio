$(document).ready(function () {

    // header scroll event
    window.onscroll = function(){
        const header = document.getElementsByClassName('header')[0];
        const h2 = header.getElementsByTagName('h2')[0];
        const scrollTop = document.documentElement.scrollTop;
        const scrollPercent = ( scrollTop / 50 ) * 100


        header.style.transition = 'all .3s'
        h2.style.transition = 'all .3s'
        
        if( 0 < scrollTop && scrollTop < 50){
            header.style.boxShadow = 'none'
            header.style.height = 87.5 - 37.5*(scrollPercent / 100) + 'px';
            h2.style.top = 2.1 - 2.1*(scrollPercent / 100) + 'rem';
            h2.style.left = (window.innerWidth/2 - h2.offsetWidth/2)*(scrollPercent / 100)  + 'px';
            h2.style.fontSize = 1.025 - 0.175*(scrollPercent / 100) + 'rem'
            h2.style.lineHeight = 44 + 6*(scrollPercent / 100) + 'px'
        }else if ( scrollTop >= 50){
            header.style.boxShadow = '0 2px 4px rgb(0, 0, 0, 0.1)'
            header.style.height = 50 + 'px';
            h2.style.top = 0 + 'rem';
            h2.style.left = (window.innerWidth/2 - h2.offsetWidth/2)  + 'px';
            h2.style.fontSize = 0.85 + 'rem'
            h2.style.lineHeight = 50 + 'px'
        }else if ( scrollTop <= 0 ){
            header.style.boxShadow = 'none'
           header.style.height = 87.5 + 'px';
            h2.style.top = 2.1 + 'rem';
            h2.style.left = 0 + 'px';
            h2.style.fontSize = 1.025 + 'rem'
            h2.style.lineHeight = 44 + 'px'
        }
    };

});