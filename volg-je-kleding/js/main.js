// Selecteer goede doel
$('main').on("click", ".doneren2-left-wrapper", function () {
    $('.checked-left').css("opacity", "1");
    $('.doneren2-left-img').addClass("checked-img");
    $('.doneren2-left-overlay').addClass("checked-background");
    $('.checked-mid').css("opacity", "0");
    $('.doneren2-mid-img').removeClass("checked-img");
    $('.doneren2-mid-overlay').removeClass("checked-background");
    $('.checked-right').css("opacity", "0");
    $('.doneren2-right-img').removeClass("checked-img");
    $('.doneren2-right-overlay').removeClass("checked-background");
});
$('main').on("click", ".doneren2-mid-wrapper", function () {
    $('.checked-mid').css("opacity", "1");
    $('.doneren2-mid-img').addClass("checked-img");
    $('.doneren2-mid-overlay').addClass("checked-background");
    $('.checked-left').css("opacity", "0");
    $('.doneren2-left-img').removeClass("checked-img");
    $('.doneren2-left-overlay').removeClass("checked-background");
    $('.checked-right').css("opacity", "0");
    $('.doneren2-right-img').removeClass("checked-img");
    $('.doneren2-right-overlay').removeClass("checked-background");
});
$('main').on("click", ".doneren2-right-wrapper", function () {
    $('.checked-right').css("opacity", "1");
    $('.doneren2-right-img').addClass("checked-img");
    $('.doneren2-right-overlay').addClass("checked-background");
    $('.checked-left').css("opacity", "0");
    $('.doneren2-left-img').removeClass("checked-img");
    $('.doneren2-left-overlay').removeClass("checked-background");
    $('.checked-mid').css("opacity", "0");
    $('.doneren2-mid-img').removeClass("checked-img");
    $('.doneren2-mid-overlay').removeClass("checked-background");
});

// Show/hide popup
$('main').on("click", ".textiel-info", function () {
    $('.popup').css({
        "opacity": "0.95",
        "pointer-events": "all"
    });
});
$('main').on("click", ".close-popup", function () {
    $('.popup').css({
        "opacity": "0",
        "pointer-events": "none"
    });
});

// The scroll-down function
function ScrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 3) * vheight
    }, 500);
};

// Continue/stop
let counter = 0;
$('main').on("click", ".end-button", function () {
    ScrollDown();
    counter = counter + 1;
    console.log(counter);

    if (counter == 1) {
        $.ajax({
            url: "paginas/kledingstuk2.html",

            success: function (data) {
                $('main').append(data);
            }
        });
        console.log("appended 2nd");
    }
    if (counter == 2) {
        $.ajax({
            url: "paginas/eindkeuze1.html",

            success: function (data) {
                $('main').append(data);
            }
        });
        console.log("appended 3rd");
    }
    if (counter == 3) {
        $.ajax({
            url: "paginas/eindkeuze2.html",

            success: function (data) {
                $('main').append(data);
            }
        });
        console.log("appended 4th");
    }
    if (counter == 4) {
        $.ajax({
            url: "paginas/eindkeuze3.html",

            success: function (data) {
                $('main').append(data);
            }
        });
        console.log("appended 5th");
    }
    if (counter == 5) {
        $.ajax({
            url: "paginas/einde.html",

            success: function (data) {
                $('main').append(data);
            }
        });
        console.log("appended 5th");
    }
});

// Buttons --> append & scroll down
$('main').on("click", "a", function (event) {
    $("a").css("pointer-events", "none");
    var y = $(window).scrollTop();
    $('html, body').animate({ scrollTop: y + 780 });
    event.preventDefault();
    $.ajax({
        url: $(this).attr("href"),

        success: function (data) {
            $('main').append(data);
        }
    });
});

// Telefoonmelding
function showViewPortSize(display) {
    if (display) {
        var width = window.innerWidth;
        jQuery('.telefoon-melding').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;bottom:0px;padding:10px"> De breedte van jouw scherm is ' + width + 'px');
        jQuery(window).resize(function () {
            width = window.innerWidth;
            jQuery('#viewportsize').html('De breedte van jouw scherm is ' + width + 'px');
        });
    }
}

$(document).ready(function () {
    showViewPortSize(true);
});