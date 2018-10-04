$(document).ready(function () {
    $(".accordion").accordion({
        collapsible: true,
        active: 'none',
        autoHeight: false,
        navigation: true
    });

    var contactHeight = $("#contact").height();
    $("#contact").css("height", "0px");
    $("#contact").show();

    $("#contactLink").on("click", function(){
        if ($("#contact").height() === contactHeight) {
            $("#contact").animate({
                height: 0
            }, 200)
        } else if ($("#contact").height() === 0) {
            $("#contact").animate({
                height: contactHeight
            }, 200);
        }
    });

    $("#contactForm").on("submit", function(e){
        e.preventDefault();
        $("#contact-container").fadeOut();
        $("#thanks").fadeIn();
        $("#contact").animate({
            height:55,
        });
        setTimeout(function(){
            $("#thanks").fadeOut();
            $("#contact").animate({
                height:0
            });
        }, 1500);
        setTimeout(function(){
            $("#contact-container").show();
        }, 2000);
    });
});