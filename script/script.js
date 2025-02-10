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
        "exito.html",
        "error.html"
    ];

    // elegir url al azar
    let randomUrl = urls[Math.floor(Math.random() * urls.length)];


    window.location.href = randomUrl;
});