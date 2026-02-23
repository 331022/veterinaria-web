//Esto es para que jest no falle en los test por no reconocer el window. asi lo ignora y va solo a la funcion para hacer el test
if (typeof window !== "undefined") {
    window.addEventListener("load", mostrarTurnos);
}

function mostrarTurnos() {

    let usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    let tabla = document.querySelector("#tablaTurnos");
    tabla.innerHTML = "";

    for (let i = 0; i < reservas.length; i++) {

        let r = reservas[i];

        if (debeMostrarTurno(usuario, r)) {

            tabla.innerHTML +=
                "<tr>" +
                "<td>" + r.fecha + "</td>" +
                "<td>" + r.hora + "</td>" +
                "<td>" + r.nombreMascota + "</td>" +
                "<td>" + r.nombreDueno + "</td>" +
                "<td>" + r.servicio + "</td>" +
                "<td>" + r.nombreProfesional + "</td>" +
                "</tr>";
        }
    }
}

function debeMostrarTurno(usuario, reserva) {

    // Admin ve todo
    if (usuario.rol == "admin") {
        return true;
    }

    // Cliente ve solo sus turnos
    if (usuario.rol == "cliente") {
        return reserva.cedulaUsuario == usuario.cedula;
    }

    // Profesional ve los turnos asignados a su nombre
    if (usuario.rol == "empleado") {
        return reserva.nombreProfesional == usuario.usuario;
    }

    return false;
}

/*
Este bloque SOLO se ejecuta en Jest (Node)
En el navegador, `module` no existe, así que se ignora
Permite que el mismo archivo funcione en navegador y en Jest
*/
if (typeof module !== "undefined") {
    module.exports = {
        mostrarTurnos,
        debeMostrarTurno
    };
}