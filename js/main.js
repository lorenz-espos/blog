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

      function git_btn() {
            // Effettua il reindirizzamento alla pagina di destinazione
            window.open ('https://github.com/lorenz-espos/G2_Progetto_SAD.git', '_blank');
        };

        function git2_btn() {
            // Effettua il reindirizzamento alla pagina di destinazione
            window.open (' https://github.com/lorenz-espos/dino_2d_game.git', '_blank');
        };

        function git3_btn() {
            // Effettua il reindirizzamento alla pagina di destinazione
            window.open ('https://github.com/lorenz-espos/IEEE_UNINA_APP_2.0.git', '_blank');
        };

    function git_social(){
        window.open ('https://github.com/lorenz-espos', '_blank');
    }

    function linkedin_social(){
        window.open ('https://www.linkedin.com/in/lorenzo-esposito-4a1671194/', '_blank');
    }

    function instagram_social(){
        window.open ('https://www.instagram.com/lorenz_espos/', '_blank');
    }
       

    