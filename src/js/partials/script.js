"use strict";
$(document).ready(function () {
    $('.slider').flickity({
        prevNextButtons: false
    });
    $(".menu-btn").click(function () {
        $(".menu").toggleClass("on");
    });
});
