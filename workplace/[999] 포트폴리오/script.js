var header = document.querySelector('header')
setInterval(function(){
    if(pageYOffset > 0){
        header.setAttribute('class','scroll')
    }else{
        header.removeAttribute('class','scroll')
    }
})