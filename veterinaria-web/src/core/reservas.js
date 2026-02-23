
console.log("validarReserva cargada");

function validarReserva(datosReserva) {

    // Nombre dueño
    if (datosReserva.nombreDueno == "") {
        alert("El nombre del dueño no puede estar vacío ni contenter numeros");
        return false;
    }

    // validar que el nombre no tenga numeros
    for (let i = 0; i < datosReserva.nombreDueno.length; i++) {
        if (!isNaN(datosReserva.nombreDueno[i]) && datosReserva.nombreDueno[i] !== " ") {
            alert("El nombre no puede contener números");
            return false;
        }
    }

    // Teléfono: 09XXXXXXXX
    if (
        datosReserva.telefono.length != 9 ||
        datosReserva.telefono.charAt(0) != "0" ||
        datosReserva.telefono.charAt(1) != "9" ||
        isNaN(datosReserva.telefono)
    ) {
        alert("El teléfono debe tener formato 09X XXX XXX");
        return false;
    }

    // Cédula (solo validamos que no esté vacía y sea número)
    if (datosReserva.cedula == "" || isNaN(datosReserva.cedula) || datosReserva.cedula.length != 8) {
        alert("La cédula es inválida");
        return false;
    }

    // Email básico
    if (
        datosReserva.mail.indexOf("@gmail.com") == -1 &&
        datosReserva.mail.indexOf("@hotmail.com") == -1
    ) {
        alert("El email debe ser @gmail.com o @hotmail.com");
        return false;
    }

    // validar que el email no tenga espacios en el medio
    for (let i = 0; i < datosReserva.mail.length; i++) {
        if (datosReserva.mail.charAt(i) == " ") {
            alert("El correo no puede tener espacios en el medio");
            return false;
        }
    }

    // Nombre mascota
    if (datosReserva.nombreMascota == "") {
        alert("El nombre de la mascota es obligatorio");
        return false;
    }

    // Tipo animal
    if (datosReserva.tipoMascota != "perro" && datosReserva.tipoMascota != "gato") {
        alert("El tipo de animal debe ser perro o gato");
        return false;
    }

    // Servicio
    if (
        datosReserva.servicio != "veterinaria" &&
        datosReserva.servicio != "estetica"
    ) {
        alert("Debe seleccionar un servicio");
        return false;
    }

    // Tipo profesional
    if (
        datosReserva.tipoProfesional != "veterinario" &&
        datosReserva.tipoProfesional != "esteticista"
    ) {
        alert("Debe seleccionar tipo de profesional");
        return false;
    }

    // Fecha (solo que exista)
    if (datosReserva.fecha == "") {
        alert("Debe seleccionar una fecha");
        return false;
    }

    // Hora entre 9 y 18
    let horaNum = Number(datosReserva.hora.substring(0, 2));
    if (horaNum < 9 || horaNum > 18) {
        alert("La hora debe estar entre 09:00 y 18:00");
        return false;
    }

    return true;
}

function guardarReserva(datosReserva) {

    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    reservas.push(datosReserva);

    localStorage.setItem("reservas", JSON.stringify(reservas));
}

/*
Este bloque SOLO se ejecuta en Jest (Node)
En el navegador, `module` no existe, así que se ignora
Permite que el mismo archivo funcione en navegador y en Jest
*/
if (typeof module !== "undefined") {
    module.exports = {
        guardarReserva,
        validarReserva
    };
}