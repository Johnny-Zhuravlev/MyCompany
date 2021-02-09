$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .burger-menu').toggleClass('active');
    });

    $('.header-nav__link, burger-menu__links').mPageScroll2id;
});
