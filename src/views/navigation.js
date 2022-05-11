if (
    window.location.hash !== "#help" &&
    window.location.hash !== "#login" &&
    window.location.hash !== "#register" ||
    window.location.hash === ""
) {
    window.location.hash = "#game"
}