//JS para la nueva página del Club RC La Nucía

//Hacer funcionar el reloj incluido en las páginas
function reloj() {
    hms = new Date ();
    hora = hms.getHours();
    minuto = hms.getMinutes();
    segundo = hms.getSeconds();
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    if (segundo < 10) {
        segundo = "0" + segundo;
    }
    
    let mireloj = hora + ":" + minuto + ":" + segundo;
    return mireloj;
}
function fecha() {
    dma = new Date();
    dia = dma.getDate();
    mes = dma.getMonth() + 1;
    año = dma.getFullYear();
    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    let miFecha = dia + "/" + mes + "/" + año;
    return miFecha;
}

function actualizar() {
    miDia = fecha();
    miFecha = document.getElementById("fecha");
    miFecha.innerHTML = miDia;
    mihora = reloj();
    mireloj = document.getElementById("reloj");
    mireloj.innerHTML = mihora;
}
setInterval(actualizar, 1000); 


   
    
   