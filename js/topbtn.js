let toTop = document.querySelector(`.to-top`);

toTop.addEventListener(`click`, function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
});