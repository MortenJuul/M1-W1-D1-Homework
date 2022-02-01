$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
        
        if ($altvalue=="West Cliff") {
            var img = $('.gallery:nth-child(1) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="North Cliff") {
            var img = $('.gallery:nth-child(2) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="East Cliff") {
            var img = $('.gallery:nth-child(3) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="South Cliff") {
            var img = $('.gallery:nth-child(4) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});