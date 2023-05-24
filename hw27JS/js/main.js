$(document).ready(function () {
        $('.header__button').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        speed: 300,
        arrows: false,
        // autoplay: true,
    });

    // $('.products__items').slick({
    // slidesToShow: 5,
    // slidesToScroll: 5,
    // dots: false,
    // arrows: true,
    // });

    $('.products__items').slick({
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
        {
            breakpoint: 768,
                settings: {
                    arrows:true,
                    centerPadding: "20px",
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ],
        prevArrow: '<button type="button" class="products__items__arrow products__items__arrowLeft"><img src="images/prev.svg" alt=" arrow prev"></button>',
        nextArrow: '<button type="button" class="products__items__arrow products__items__arrowRight"><img src="images/next.svg" alt=" arrow next"></button>',
    });

    $('.partners__items-slider').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
        ],
        prevArrow: '<button type="button" class="partners__items__arrow partners__items__arrowLeft"><img src="images/prev.svg" alt=" arrow prev"></button>',
        nextArrow: '<button type="button" class="partners__items__arrow partners__items__arrowRight"><img src="images/next.svg" alt=" arrow next"></button>',
    });
});
	
	