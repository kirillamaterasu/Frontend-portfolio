$(document).ready(function() {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
});

$('.menu__btn').on('click', function () {
  $('.menu__btn-line').toggleClass('change');
});


  $('.project__slider').slick({
    dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="../img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="../img/arrow-right.svg" alt=""></button>',
  });

});
