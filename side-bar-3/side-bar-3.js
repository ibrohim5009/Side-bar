

"use strict";

const changeColor = (click, that) => {
    // Set color of bottom nav
    let target = $(that).parent(".bottom-navigation");
    let color = $(that).attr("data-destination-color");
    $(target).css("background-color", color);
    // You'll have to add more of this in order to change the whole theme
    $("main").css("--color-main", color);
};

const bottomNavClick = (e, that) => {
    $(".active").removeClass("active");
    console.log(typeof that);
    $(that).addClass("active");
    changeColor(e, that);
};

$(".bottom-navigation-destination").on("click", (e) => {
    event.stopPropagation();
    let x = $(e.currentTarget).hasClass("active");
    bottomNavClick(e, e.currentTarget);
    loadCards(e.currentTarget, x);
});

const appendContent = (x, label = "Home") => {
    for (let i = 0; i < 12; i++)
        $(x).append(`<div class="card">
            <section class="card-title"> ${label} </section>

            <section class="card-supporting-text">
                Card supporting text
            </section>

            <section class="card-actions">
                <a class="button"> Button </a>
            </section>
        </div>`);
};

// To save the timeout in order to stop it from popping up after another destination is clicked
var loadingDestination;

const loadCards = (z, xy) => {
    let destinationName;
    if (z)
        destinationName = $(z)
            .find(".bottom-navigation-label")
            .text();
    else
        destinationName = $(
            ".bottom-navigation-destination.active .bottom-navigation-label"
        ).text();

    // Create a progress bar
    let y = $("main").html(`<div class="progress">
                            <div class="indeterminate"></div>
                        </div>`);

    // Clear timeout if already running
    if (loadingDestination)
        window.clearTimeout(loadingDestination);

    // Simulate loading
    loadingDestination = setTimeout(function () {
        let x = $(`<article class="smart-grid"></article>`);
        $(y).html(x);
        let previousPadding = $(x).css("padding-top");
        $(x).css({ opacity: 0, paddingTop: "24px" });
        appendContent(x, destinationName);
        $(x).animate({ opacity: 1, paddingTop: previousPadding }, 375);
        loadingDestination = null;
    }, 1300);
};

window.onload = loadCards();

