if (
    (window.location.hash !== "#help" &&
        window.location.hash !== "#game" &&
        window.location.hash !== "profile" &&
        window.location.hash !== "#register") ||
    window.location.hash === ""
) {
    window.location.hash = "#login"
}
