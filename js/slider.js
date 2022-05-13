setInterval(function() {
    const show = document.querySelector("article[data-show]");
    const next =
        show.nextElementSibling || document.querySelector("article:first-child");
    const up = document.querySelector("article[data-up]");

    if (up) {
        up.removeAttribute("data-up");
    }

    show.removeAttribute("data-show");
    show.setAttribute("data-up", "");

    next.setAttribute("data-show", "");
}, 2000);