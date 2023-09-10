$(function(){

    $('#langList').click(function(e){
        e.preventDefault();
        $('#langList').toggleClass('open')
    })


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

    var midslide = new Swiper(".swiper.con-slide", {
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
            768:{
                slidesPerView: 2,
            },
            1025:{
                slidesPerView: 3,
            }
          },
    });
    
    $('.sc-search select').change(function(e){
        e.preventDefault();
        $(this).css('color','#000');
    })



    $('.chk-wrap .title').click(function(){
        target=$(this).attr('for');
        console.log(target);



        if($(this).siblings('input').prop('checked')){
            $(`[data-target="${target}"]`).find('input').prop('checked',false)
        }else{
            $(`[data-target="${target}"]`).find('input').prop('checked',true)
        }
    })



})