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

//counter state section

//let section = document.querySelector(".stat"),
//    hs = document.querySelectorAll(".h1"),
//    flag = false;

//window.onscroll = function () {
//    if (window.scrollY >= section.offsetTop - 500) {
//        if (!flag) {
//            hs.forEach((h) => statConter(h));
//        }
//        flag = true;
//    }
//}

//function statConter(el) {
//    let goal = el.dataset.goal;
//    let count = setInterval(() => {
//        el.textContent++;
//        if (el.textContent == goal) {
//            clearInterval(count);
//        }
//    },2000/goal)

//}

// counterUp stat section at the same time
const counterUp = window.counterUp.default;

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            })
            el.classList.add('is-visible')
        }
    });
}

const IO = new IntersectionObserver(callback, { threshold: 1 });

const el = document.querySelectorAll('.h1');
el.forEach(el => {
    IO.observe(el);
});
