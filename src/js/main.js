//===================
//  FLICKITY
//  do not touch
//===================

$('.main-carousel').flickity({
    contain: true,
    pageDots: false,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 2500,
    initialIndex: 2,
    prevNextButtons: false
});

//===================
//  BXSLIDER
//  do not touch
//===================

$('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 4,
    slideMargin: 10,
    controls: true,
    ticker: true,
    speed: 12000,
    captions: true
});

//===================
//  VALIDATION
//  do not touch
//===================

$(function() {
    $("form[name='form']").validate({

        rules: {

            youName:{
                required: true,
                minlength: 4,
                maxlength: 16
            },

            email: {
                required: true,
                email: true
            },

            subject: {
                required: true,
                minlength: 4,
                maxlength: 16
            },

            message: {
                required: true,
                minlength: 4
            }

        },

        messages: {

            youName:{
                required: "This field is required",
                minlength: "Name must be at least 4 characters",
                maxlength: "The maximum number of characters is 16"
            },

            email: {
                required: "This field is required",
                email: "Please enter a valid email address"
            },


            subject: {
                required: "This field is required",
                minlength: "Name must be at least 4 characters",
                maxlength: "The maximum number of characters is 16"
            },

            message: {
                required: "This field is required",
                minlength: "Name must be at least 4 characters"
            }
        },

        submitHandler: function() {
            toastr.success('Your information are accepted');
            $('.form').get(0).reset();
        }
    });
});
