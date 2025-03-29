/*barra de busqueda*/
function buscarProfesor() {
    let nombre = document.getElementById("busqueda").value.toLowerCase();
    let profesores = document.querySelectorAll(".profesor"); 
            
        for (let prof of profesores) {
            let nombreProfesor = prof.querySelector("h2").innerText.toLowerCase();
            if (nombreProfesor.includes(nombre)) {
                prof.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
                }
            }
        alert("Profesor no encontrado"); 
        }

/*borrar opiniones antiguas*/
document.addEventListener("DOMContentLoaded", function () {
    let profesores = document.querySelectorAll(".profesor");

    profesores.forEach(function (profesor) {
    let opiniones = profesor.querySelectorAll(".opinion"); // Selecciona todas las opiniones de ese profesor
    let maxOpiniones = 10;

    if (opiniones.length > maxOpiniones) {
        for (let i = 0; i < opiniones.length - maxOpiniones; i++) {
            opiniones[i].remove();
        }
    }
    });
});