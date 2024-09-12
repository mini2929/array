const btnToggle = document.querySelector(".btnToggle");
const [topE1, middleE1, bottomE1] = btnToggle.querySelectorAll("div");

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("on");
})