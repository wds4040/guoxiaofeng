$(function(){
    var l = $(window).width()-$(".box").width();
    $(".box").css({
        "left":l
    })

    $(window).resize(function() {
        var l = $(window).width()-$(".box").width();
        $(".box").css({
            "left":l
        })
    });
})