$(function(){

    $(".info-btn").click(function(){
        $(this).parent().parent().parent().parent().find(".info__content").slideToggle(500);
    });



    $('.employee__slider').slick({
        // infinite: true,
        speed: 1500,
        slidesToShow: 1,
        // centerMode: true,
        
        centerPadding: "120px",
        // variableWidth: true,
        // autoplay: true,
        asNavFor: ".number-slider",
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        // responsive: [
        //     {
        //       breakpoint: 700,
        //       settings: {
        //         centerPadding: "0px",
        //         centerMode: true,
        //         // cssEase: 'linear',
        //         fade: true,
        //         slidesToShow: 1,
        //         variableWidth: false,
        //       }
        //     },
        // ]
    });

    $('.number-slider').slick({
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        // centerPadding: "120px",
        // variableWidth: false,
        // autoplay: true,
        fade: true,
        asNavFor: ".employee__slider",
        arrows: false,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });
})
