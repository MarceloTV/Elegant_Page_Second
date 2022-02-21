const down = document.getElementById("down");
const menu = document.getElementById("menu");
const up = document.getElementById("up");

down.onclick = e => {
    menu.classList.remove("close");
    menu.classList.add("show");
}

up.onclick = e => {
    menu.classList.remove("show");
    menu.classList.add("close")
}
