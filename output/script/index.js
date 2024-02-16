const hamburger = document.getElementById("hamburger");

// show and hide hamburger menu
hamburger.addEventListener("click", showSlidebar);

function showSlidebar() {
    const slidebar = document.querySelector(".slidebar");
    const disp = slidebar.style.display
    if (disp === "none") {
        slidebar.style.display = "flex";
    }else {
        slidebar.style.display = "none";
    }
}