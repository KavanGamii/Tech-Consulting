var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 4,

        },
        // when window width is >= 640px
    }
});

var swiper = new Swiper(".center", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,

        },
    }
});

var swiper = new Swiper(".testimonal", {
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,

        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 2,

        },
        // when window width is >= 640px
    }
});