$(document).ready(function() {


var header = document.querySelector('header')
setInterval(function(){
    if(pageYOffset > 0){
        header.setAttribute('class','scroll')
    }else{
        header.removeAttribute('class','scroll')
    }
});



// fullpage 기능
$('#fullpage').fullpage({
    //options here
    anchors: ['section1', 'section2', 'section3','section4'],
    navigation:true,
    navigationPosition:'right',


});

});
