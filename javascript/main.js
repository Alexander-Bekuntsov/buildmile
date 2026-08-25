$(".rcatalog").each(function (index, element) {
    var navClass = $(this).find(".rcatalog__nav").data("class");
    new Swiper(`#${$(this).attr("id")} .swiper`, {
        slidesPerView: 3,
        spaceBetween: 5,
        navigation: {
            nextEl: `.${navClass}-next`,
            prevEl: `.${navClass}-prev`,
        },
        breakpoints: {
            1250: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 1,
            }
        }
    });
});

document.querySelectorAll("*[data-href]").forEach((buttonItem) => buttonItem.addEventListener("click", (e) => {
    document.location.href = buttonItem.getAttribute("data-href");
}));

const projectSlider = new Swiper('.js-project-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
});

const mainHomeSlider = new Swiper('.main-home__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    lazy: true,
    autoplay:true,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.main-home__pagination',
        clickable: true,
    },
});

projectSlider.on("slideChange", function () {
    $(".project__slider-nav img").removeClass("item--active");
    $(`.project__slider-nav img:eq(${projectSlider.realIndex})`).addClass("item--active");
});

$(document).on("click", ".js-sort-social .filter-sort__nav li", function () {
    const Parent = $(this).closest(".js-sort-social");
    Parent.find(".filter-sort__nav li").removeClass("active");
    $(this).addClass("active");
    var icon = $(this).data("select-icon");
    icon = icon == undefined ? "whatsapp" : icon;
    Parent.find(".filter-sort__active div").attr("class", `ic-social ic-${icon}`);
    Parent.attr("data-active-option", icon);
    Parent.find(".filter-sort__active:not(:has(div))").text($(this).text());
});

$(document).on("click", ".sort--cv", function () {
    $(this).closest(".sort--cv").toggleClass("sort--active");
});

$(document).mouseup(function (e) {
    var elem = $(".sort--cv");
    if (!elem.is(e.target)
        && elem.has(e.target).length === 0) {
        elem.removeClass("sort--active");
    }
});

$(".filter-left__header").on("click", function () {
    if ($(window).width() < 776) {
        // $(this).next().slideToggle(300);
        $(this).closest(".filter-left").toggleClass("filter--active");
    }
});

var lastScrollTop;
$(window).scroll(function () {
    if ($(window).width() < 776) {
        var st = $(this).scrollTop();
        $(".search").toggleClass("search-hide", st > lastScrollTop);
        lastScrollTop = st;
    }
});

$(document).ready(function () {
    $('.js-read-more-mobile').click(function () {
        $('.about-block__content').toggleClass('hide-c', !$('.about-block__content').hasClass('hide-c'));
        if ($('.about-block__content').hasClass('hide-c')) {
            $('.js-read-more-mobile').html('Скрыть текст');
        } else {
            $('.js-read-more-mobile').html('Читать подробнее');
        }
        return false;
    });
});

$(function () {
    $(".card_params li:nth-child(1) span").each(function (index, element) {
        if ($(this).text().indexOf(",") != -1) {
            $(this).addClass("span-trs");
        }
    });

    $(".js-load-general").on("click", function () {
        $(this).parent().find(".js-project-lazy").slideDown(300);
        $(this).slideUp(300);
    });

    $(document).on("click", ".project__complect-item", function () {
        $(".project__complect-item").removeClass("item--active");
        $(this).addClass("item--active");
        $(".project__data [data-item]").slideUp(300);
        $(`.project__data [data-item='${$(this).find(".project__complect-item-btn").data("item")}']`).slideDown(300);
    });
});

new Swiper('.project__slider-nav .swiper', {
    slidesPerView: "auto",
    spaceBetween: 5,
    navigation: {
        nextEl: '.js-nav-next',
        prevEl: '.js-nav-prev',
    },
    breakpoints: {
        950: {
            slidesPerView: 4,
        }
    }
});

$(document).on("click", ".project__slider-nav img", function () {
    projectSlider.slideTo($(this).closest(".swiper-slide").index());
});

$(function () {
    $(".project__complect .project__complect-item:first").click();
})

const projectComplectSlider = new Swiper('.project__complect .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.js-nav-catalog-next',
        prevEl: '.js-nav-catalog-prev',
    },
    breakpoints: {
        950: {
            slidesPerView: 1,
        }
    }
});

projectComplectSlider.on("transitionEnd", function () {
    if ($(window).width() < 776) {
        setTimeout(() => {
            $(".project__complect .swiper .swiper-slide-active .project__complect-item").click();
        }, 100);
    }
});