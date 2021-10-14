$(document).ready(function () {
    //scroll to top
    var btn = $(".scroll-top");

    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? btn.fadeIn() : btn.fadeOut();
    });

    btn.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});
//shuffle section
$(function () {
    'use strict';

    /*features shuffle*/
    $('.featured-work .container ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.featured-work .featured-img li.col-lg-3.col-md-6.col-sm-12').fadeIn(800);
        } else {
            $('.featured-work .featured-img li.col-lg-3.col-md-6.col-sm-12').hide();
            $($(this).data('class')).fadeIn(800);
          
        }
    });
});

//loding screen

$(window).on('load', function () {


    //loding
    $(".load .loader").fadeOut(2000, function () {

        $(this).parent().fadeOut(2000, function () {
            $(this).remove();  //remove code from DOM
        });
    });

});

//counter (state section)

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            inc = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += inc;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 288, 3000);
    counter("count2", 0, 1320, 3000);
    counter("count3", 0, 863, 3000);
    counter("count4", 0, 2330, 3000);
});