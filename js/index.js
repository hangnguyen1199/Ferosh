$(document).ready(function() {
    $('.slide-reason').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function() {
    $('.partner-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, ]
    });

});