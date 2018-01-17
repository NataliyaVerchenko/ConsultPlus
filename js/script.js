$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#testimonialCarousel').carousel({ interval: 12000 });

    $('#logoCarousel').find('.item').each(function () {
        var next = $(this).next();

        for (var i = 0; i < 4; i++) {
            if (next.length > 0) {
                next.children(':first-child').clone().appendTo($(this));
                next = next.next();
            } else {
                $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                next = $(this).siblings(':first').next();
            }
        }
    });
});