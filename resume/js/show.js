$(function(){
    $('.nav_ul li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.silder_btn').click(function(){
        showSilder();
    })
    $('.mask').click(function(){
        hideSilder();
    })

    function showSilder(){
        $('.mask').fadeIn()
        $('.silder').css('right',0);
    }
    function hideSilder(){
        $('.mask').fadeOut()
        $('.silder').css('right',-300);
    }
    $('.top').click(function(){
        $('body,html').animate({
            scrollTop: $('div').scrollTop()
        },300) 
    })
    $(window).scroll(function(){
       if($(window).scrollTop()>500){
           $('.top').css('display','block');
       }else{
        $('.top').css('display','none');
       } 
    })
})

