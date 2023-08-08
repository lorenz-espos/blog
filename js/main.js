$(document).ready(function() {
    $('#imageCarousel').carousel({
        interval: 7000,
        pause: 'hover',
        wrap: true
    });

    $('#imageCarousel').on('slide.bs.carousel', function () {
        // Aggiungi le tue animazioni personalizzate qui
        $('.carousel-inner').css('transition', 'transform 0.2s ease-in-out');
        $('.carousel-item').css('opacity', '1');
        $('.carousel-item.active').css('opacity', '0.8');
    });
});
