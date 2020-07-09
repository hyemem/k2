$(function(){

// 메뉴 열기 효과
    $("#menu_icon").click(function(){
        $("#menu_wrap").animate({'left':0},800,"easeOutCubic");
        $("body").css({'overflow':'hidden'});
    });


// 메뉴 닫기 효과
    $("#close_btn").click(function(){
        $("#menu_wrap").animate({'left':'-100%'},800,"easeOutCubic");
        $("body").css({'overflow':'auto'});
    });

});