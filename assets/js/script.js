$(function(){
    $('.link-util:last-child').click(function(e){
        e.preventDefault();
        $('.link-util:last-child').toggleClass('open')
    })

    // $('.sc-notice .btn-close').click(function () {
    //     $('.sc-notice').hide();
    // })

    $('.menu-item').hover(function(){

        if($(this).find('.sub-list').length){
            $('.header').addClass('hover')
            $(this).find('.sub-list').addClass('active')
        }
    }, function(){
        $('.header').removeClass('hover')
        $('.sub-list').removeClass('active')
    })

    $('.footer-site .button').click(function(){
        $('.footer-site').toggleClass('active');
    });


    var mainslide = new Swiper(".slide", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop:true,
    });

    var midslide = new Swiper(".con-slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        breakpoints:{
            769:{
                slidesPerView: 1.1,
            }
          },
    });

    var lastslide = new Swiper(".benefit-slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        breakpoints:{
            769:{
                slidesPerView: 3,
                spaceBetween: 44,
            }
          },
    });


})