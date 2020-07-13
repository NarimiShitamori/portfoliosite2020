$(function(){

    //articleの部分
    var duration = 300;
    var $images = $('.topics-list p')

    $images.on('mouseover',function(){
        $(this).find('img').stop(true).animate({
            opacity: '0.5',
        }, duration );
    })
    $images.on('mouseout',function(){
        $(this).find('img').stop(true).animate({
            opacity:'1'
        },duration);
    });
    $('.fadein').hide().fadeIn(5000);

});
