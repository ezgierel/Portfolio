const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");

window.addEventListener("resize", () => {
    //whenever page is getting smaller, hamburger menu will be closed
    if (body.offsetWidth < 524) { //540 with 8px margin on both sides
        menu.classList.add("hidden-menu");
    }
})

//click actions
menuIcon.addEventListener("click", () => {
    console.log("width is" + body.offsetWidth)
    if (menu.classList.contains("hidden-menu")) {
        menu.classList.remove("hidden-menu");
        menu.classList.add("visible-menu");
    } else {
        menu.classList.remove("visible-menu");
        menu.classList.add("hidden-menu");
    }
})