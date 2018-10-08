$(window).scroll(function() {
    if($(this).scrollTop() > 5)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.navbar-dark').addClass('opaque');
        $('.navbar-brand').addClass('opaque');

    } else {
        $('.navbar-dark').removeClass('opaque');
        $('.navbar-brand').removeClass('opaque');
    }
});
