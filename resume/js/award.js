var i=0;
$(document).ready(function(){
    $('.ig').eq(0).show().siblings().hide();
    $('.left_button').click(function(){
        if(i==0){
            i=7;
        }else{
            i--;
        }
        show();
    })
    $('.right_button').click(function(){
        if(i==7){
            i=0;
        }else{
            i++;
        }
        show();
    })
})

function show(){
    $('.ig').eq(i).fadeIn(300).siblings().fadeOut(300);
}