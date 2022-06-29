$(function () {

    $(".menu_icon").on("click", function () {
        if ($(".menu ul:hidden").length) {
            $(".menu ul").css("display", "flex");
        } else {
            $(".menu ul").css("display", "none");
        }
    });

    var sliderBar = $(".j_progress_bar");
    var slideTime = 4000;
    var slideTimeTransition = 300;
    var slideControl = 0;

    document.onload = function () {
        $(sliderBar[slideControl]).find(".progress_bar_progression").animate({
            width: "100%"
        }, slideTime - slideTimeTransition);
        slideControl++;
    };

    var slideInterval = setInterval(function () {
        
        slideControl = (slideControl == sliderBar.length ? 0 : slideControl);
        sliderBar.find(".progress_bar_progression").css("width", "0");

        $(sliderBar[slideControl]).find(".progress_bar_progression").animate({
            width: "100%"
        }, slideTime - slideTimeTransition);

        slideControl++;
    }, slideTime);

    var boxText = $(".j_text_box_p");
    var boxButton = $(".j_text_btn");
    var boxTotalHeight = (window.outerWidth < 913 ? $(".j_image_box")[0].offsetHeight * 1.5 : $(".j_image_box")[0].offsetHeight);
    var buttonTotalHeight = boxButton[0].offsetHeight * boxButton.length;
    var marginHeight = 14 * (boxButton.length - 2);
    var paddingHeight = 24 * 2;

    var boxTextTotalHeight = boxTotalHeight - buttonTotalHeight - marginHeight - paddingHeight;

    boxText.css("height", String(boxTextTotalHeight) + "px");

    

    window.onresize = function () {
        boxTotalHeight = (window.outerWidth < 913 ? $(".j_image_box")[0].offsetHeight * 1.5 : $(".j_image_box")[0].offsetHeight);
        boxTextTotalHeight = boxTotalHeight - buttonTotalHeight - marginHeight - paddingHeight;
        boxText.css("height", String(boxTextTotalHeight) + "px");
    };

    boxButton.on("click", function () {

        if ($(this).siblings(".j_text_box:hidden").length) {
            boxButton.find(".j_toggle").addClass("fa-angle-down");
            boxButton.find(".j_toggle").removeClass("fa-angle-up");
            $(this).find(".j_toggle").addClass("fa-angle-up");
            $(this).find(".j_toggle").removeClass("fa-angle-down");
            boxText.parent(".j_text_box").slideUp();
            $(this).siblings(".j_text_box:hidden").slideDown();
        }
    });
});