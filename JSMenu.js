//Javascript para la Página RC La Nucía


document.querySelector("#boton-hamburguesa").addEventListener("click", function () {
    var menu = document.querySelector(".menu-hamburguesa");
    var boton = document.querySelector("#boton-hamburguesa");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        boton.textContent = "X cerrar";
    } else {
      menu.style.display = "none";
      boton.textContent = '\u2630' + " Menú";
    }
  });

// Evita el envío del formulario por spambots

let imagenes = ["Imágenes/semaforoRojo.png", "Imágenes/semaforoAmarillo.png","Imágenes/semaforoVerde.png" ];
let division = document.querySelector("#division");
let imagen = document.createElement("img");
let i = Math.floor(Math.random() * 3);
let enviar = document.querySelector(".boton");
let privacidad = document.querySelector(".izquierda");
let opcion = document.querySelector("select");

imagen.setAttribute("src", imagenes[i]);
division.appendChild(imagen);

function seleccionaColor(opcion) {
  console.log(opcion);
  if (i == opcion) {
    enviar.hidden = false;
    enviar.value = "Enviar";
  };
};

//Política de privacidad

function envio() { 
  if (privacidad.checked == true) {
    enviar.disabled = false;
    enviar.hidden = true;
    division.hidden = false;
  } else {
    enviar.disabled = true;
    enviar.value = "Debes aceptar la política de privacidad";
    division.hidden = true;
  }; 
};
