$('document').ready(function(){
    var $modal = $('.modal-container');
    var $toTopBtn = $('.btn__go-top');

    $('.header__consult-btn').on('click', function() {
        $modal.fadeIn('slow');
    });

    $('.btn__send-data-console').on('click', function() {
        console.log("Данные из формы:");
        console.log("Full name: " + document.getElementById('fullName').value);
        console.log("Phone nomber: " + document.getElementById('phoneNomber').value);
        $modal.fadeOut('fast');
    });

    $('.close_modal').on('click', function() {
        $modal.fadeOut('fast');
    });

    $(window).scroll(function() {        
        if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
            $toTopBtn.fadeIn('slow');
        } else {
            $toTopBtn.fadeOut('slow');
    }});

    $toTopBtn.on('click', function() {
        console.log('asdasd')
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
    })

/*     $('.feedback__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    }); */

    $('.feedback__slider').slick();

});

