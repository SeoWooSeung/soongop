
$(function(){

    $('.main_visual .main_visual_slide').on('init afterChange',function () {
        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

$('.main_visual .main_visual_slide').slick({
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnActive:false,
});

$('.main_visual .main_visual_slide_arrows .left').on('click',function(){
    $('.main_visual .main_visual_slide').slick('slickPrev');
})

$('.main_visual .main_visual_slide_arrows .right').on('click',function(){
    $('.main_visual .main_visual_slide').slick('slickNext');
})


$('.main_menu_slide').slick({
    arrows:false,
    autoplay:true,
slidesToShow:5,

});


$('.main_visual .wheel').on('click',function(e){
e.preventDefault(); //a태그 때문에 화면 깜빡임 없애기//
// console.log($(this.hash).offset().top);
let H = $(this.hash).offset().top;
$('html,body').animate({scrollTop: H}, 800 )
})

}); 