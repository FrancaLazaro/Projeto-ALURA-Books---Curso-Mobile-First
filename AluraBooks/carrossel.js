const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});