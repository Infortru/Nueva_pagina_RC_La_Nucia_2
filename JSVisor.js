//JS para el visor de imágenes

window.onload = function() { //tras cargar la página ...
visor1 = document.querySelector("main"); //referencia al visor
mititulo = document.querySelector("#titulo"); //referencia al pie de foto
}
function mifoto(num) { //cambiar la imagen
         f = "Imágenes/foto" + num + ".jpg"; //ruta de la nueva imagen
         document.images["fotoVisor"].src = f; //cambiar imagen
         t = document.images["fotos"+num].alt; //texto de pie de foto
         mititulo.innerHTML = t; //cambiar pie de foto
}
