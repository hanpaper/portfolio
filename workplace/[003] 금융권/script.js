$(document).ready(function () {

  //top button
  const btn_up = document.getElementsByClassName('btn-up')[0];

  btn_up.addEventListener('click', function(){
    window.scrollTo(0, 0)
  });


  //slider
  var swiper = new Swiper(".slide-swiper__type1", {
    spaceBetween: 0, // 슬라이드 사이 간격
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".slide-swiper__type2", {
    slidesPerView: 6,
    navigation: {
      nextEl: ".btn-next__type2",
      prevEl: ".btn-prev__type2",
    }
  });
  

  var swiper = new Swiper(".slide-swiper__type3", {
    direction: "vertical",
    navigation: {
      nextEl: ".btn-next__type3",
      prevEl: ".btn-prev__type3",
    }
  });

  
  // menubar
  const body = document.getElementsByTagName('body')[0];
  const btn_search = document.querySelectorAll('.menu .btn-search')[0];
  const btn_menu = document.querySelectorAll('.menu .btn-menu')[0];
  const popup = document.querySelectorAll('.popup')[0];
  const searchBox = document.querySelectorAll('.search-box')[0];
  const megamenu = document.querySelectorAll('.megamenu')[0];
  const btn_close = document.querySelectorAll('.popup .btn-close');
  const popupState = popup.querySelectorAll('active');

  btn_search.addEventListener('click', function () {
    popup.classList.add('active');
    searchBox.classList.add('active');
    body.classList.add('overflow-hidden')
  });

  btn_menu.addEventListener('click', function () {
    popup.classList.add('active');
    megamenu.classList.add('active');
    searchBox.classList.remove('active');
    body.classList.add('overflow-hidden')

  });

  for (i = 0; i < btn_close.length; i++) {
    btn_close[i].addEventListener('click', function () {
      popup.classList.remove('active');
      searchBox.classList.remove('active');
      megamenu.classList.remove('active');
      body.classList.remove('overflow-hidden')
    });
  }

});
