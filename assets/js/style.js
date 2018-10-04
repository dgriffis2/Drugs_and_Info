$(document).ready(function () {
    $("#nav-container").fadeIn(300, function () {
        $("#hero-container").fadeIn(300, function () {
            $("#articles-container").fadeIn(300);
        })
        $("#hero-container").css("display", "flex");

    });
    $("#nav-container").css("display", "flex")

    // Get the height of contact 
    var contactHeight = $("#contact").height();
    $("#contact").css("height", "0px");
    $("#contact").show();

    $("#contactLink").on("click", function () {
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

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        if ($("#userMessage").val() === "") {
            $("#userMessage").effect("shake");
        } else if ($("#userName").val() === "") {
            $("#userName").effect("shake");
        } else if ($("#userEmail").val() === "") {
            $("#userEmail").effect("shake");
        } else {
            $("#contact-container").fadeOut();
            $("#thanks").fadeIn();
            $("#contact").animate({
                height: 55,
            });
            setTimeout(function () {
                $("#thanks").fadeOut();
                $("#contact").animate({
                    height: 0
                });
            }, 1500);
            setTimeout(function () {
                $("#contact-container").show();
            }, 2000);
        }

    });
});
