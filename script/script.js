// var a = 1;
// var b = 2;

// alert(a + b);

// var apellido = "Perez";
// var nombre = "Juan";

// alert(nombre + " " + apellido);

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático

    // URLs posibles
    let urls = [
        "file:///C:/Users/vanil/OneDrive/Documentos/Consensus/Html%20-%20css/exito.html",
        "file:///C:/Users/vanil/OneDrive/Documentos/Consensus/Html%20-%20css/error.html"
    ];

    // elegir url al azar
    let randomUrl = urls[Math.floor(Math.random() * urls.length)];


    window.location.href = randomUrl;
});