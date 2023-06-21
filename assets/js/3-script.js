

function pintar(color = "green"){
    elemento.style.backgroundColor = color;
}

let elemento = document.getElementById("ele1");
pintar()

elemento.addEventListener("click", function () {
    pintar("yellow");
});
