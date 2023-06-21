
let cambioColor = "";

let cambiarColor1 = document.getElementById("caja1");
let cambiarColor2 = document.getElementById("caja2");
let cambiarColor3 = document.getElementById("caja3");
let cambiarColor4 = document.getElementById("caja4");


cambiarColor1.addEventListener("click", function () {
  cambiarColor(cambiarColor1);
});

cambiarColor2.addEventListener("click", function () {
  cambiarColor(cambiarColor2);
});

cambiarColor3.addEventListener("click", function () {
  cambiarColor(cambiarColor3);
});

cambiarColor4.addEventListener("click", function () {
  cambiarColor(cambiarColor4);
});


function cambiarColor(elemento) {
  if (cambioColor !== "") {
    elemento.style.backgroundColor = cambioColor;
  }
}

document.addEventListener("keydown", function (event) {
  const tecla = event.key.toLowerCase();

  if (tecla === "a") {
    cambioColor = "orange";
  } else if (tecla === "s") {
    cambioColor = "chartreuse";
  } else if (tecla === "d") {
    cambioColor = "crimson";
  } else if (tecla === "f") {
    cambioColor = "yellow";
  }
});
