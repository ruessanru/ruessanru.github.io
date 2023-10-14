/*const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";*/

/*document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
};*/
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/escandalosos.png") {
    miImage.setAttribute("src", "images/escandalosos.jpg");
  } else {
    miImage.setAttribute("src", "images/escandalosos.png");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.innerHTML = "Estos osos son geniales, " + miNombre;
    }
  }
  
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Estos osos son geniales, " + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
}
