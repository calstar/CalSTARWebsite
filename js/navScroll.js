$(window).scroll(function() {
    if($(this).scrollTop() > 5)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.navbar-dark').addClass('opaque');
        $('.navbar-brand').addClass('opaque');
        $('.navbar-dark:hover').addClass('opaque');
        // $('.dropdown-content a').addClass('opaque');
        // $('.highlight').addClass('opaque');
    

    } else {
        $('.navbar-dark').removeClass('opaque');
        $('.navbar-brand').removeClass('opaque')
        $('.navbar-dark:hover').removeClass('opaque');
        // $('.dropdown-content a').removeClass('opaque');
        // $('.highlight').removeClass('opaque');
    }
});
