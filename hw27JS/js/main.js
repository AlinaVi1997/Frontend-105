$(document).ready(function () {
    $('.top__slider').slick({
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
    });

    $('.products__items').slick({
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrow: false,
        responsive: [
        {
            breakpoint: 769,
                settings: {
                    speed: 300,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        {
            breakpoint: 321,
                settings: {
                    arrows: false,
                    autoplay: true,
                    // dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: '<button type="button" class="products__items__arrow products__items__arrowLeft"><img src="images/prev.svg" alt=" arrow prev"></button>',
        nextArrow: '<button type="button" class="products__items__arrow products__items__arrowRight"><img src="images/next.svg" alt=" arrow next"></button>',
    });

    $('.partners__items-slider').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
          {
            breakpoint: 321,
              settings: {
                    variableWidth: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: '<button type="button" class="partners__items__arrow partners__items__arrowLeft"><img src="images/prev.svg" alt=" arrow prev"></button>',
        nextArrow: '<button type="button" class="partners__items__arrow partners__items__arrowRight"><img src="images/next.svg" alt=" arrow next"></button>',
    });
});
	