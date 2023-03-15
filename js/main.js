$(document).ready(function() {

    // Carousel
    const owl = $('.owl-carousel');
    
    owl.owlCarousel({
        center: true,
        loop: true,
        startPosition: 0,
        items: 1,
        margin: 20,
        responsive : {
            540 : {
                items: 3,
                startPosition: 1,
            },
            1200 : {
                items: 3,
                startPosition: 1,
                margin: 30
            }
        }
    });
    
    $('.slider__btn--prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    
    
    $('.slider__btn--next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    //Nav icon
    const navBtn = document.querySelector('.nav__toggle');
    const nav = document.querySelector('.nav')
    const menuIcon = document.querySelector('.menu-icon');


    navBtn.onclick = function () {
        nav.classList.toggle('nav--mobile')
        menuIcon.classList.toggle('menu-icon--active');
        document.body.classList.toggle('no-scroll');
    };

    // Modal
    // Затухание
    $('.nav__login a').click(function(event) {
        $(this).modal({
            fadeDuration: 300,
        });
        return false;
    });
    
    $('.header__btn').click(function(event) {
        $(this).modal({
            fadeDuration: 300,
        });
        
        return false;
    });
    $('.destinations__btn').click(function(event) {
        $(this).modal({
            fadeDuration: 300,
        });
        return false;
    });
    
    // Смена картинок в модальных окнах
    $('.popup-1__btn').on('click', function() {
        $('#popup-1 img').attr('src', "./img/modal/kitty.png");
    });
    $('#popup-1 img').on('click', function() {
        $('#popup-1 img').attr('src', "https://cdn-icons-png.flaticon.com/512/1047/1047711.png");
    })
    
    $('.popup-2__btn').on('click', function() {
        $('#popup-2 img').attr('src', "./img/modal/kitty.png");
    });
    $('#popup-2 img').on('click', function() {
        $('#popup-2 img').attr('src', "https://cdn-icons-png.flaticon.com/512/1047/1047711.png");
    })
});
