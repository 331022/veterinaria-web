window.addEventListener("load", inicio);

function inicio() {
    validarSesion();

    let btnLogin = document.querySelector("#btnLogIn");
    if (btnLogin != null) {
        btnLogin.addEventListener("click", logearse);
    }

    let btnLogout = document.querySelector("#btnLogOut");
    if (btnLogout != null) {
        btnLogout.addEventListener("click", cerrarSesion);
    }

    let btnReservar = document.querySelector("#btnReservar");
    if (btnReservar != null) {
        btnReservar.addEventListener("click", reservarTurno);
    }
    let btnVerTurnos = document.querySelector("#btnVerTurnos");
    if (btnVerTurnos != null) {
        btnVerTurnos.addEventListener("click", verTurnos);
    }
}

function validarSesion(){

    let usuario = localStorage.getItem("usuarioLogueado");

    // Si NO hay usuario y no estamos en login.html
    if (usuario == null && !location.href.includes("login.html")) {
        location.href = "login.html";
    }

    // Si YA hay usuario y estamos en login.html
    if (usuario != null && location.href.includes("login.html")) {
        location.href = "index.html";
    }
}

console.log("app cargado");

function logearse(){
    let usuarioIngresado = document.querySelector("#usuario").value;
    let passwordIngresado = document.querySelector("#password").value;

    let datosLogin = {
        usuario: usuarioIngresado,
        password: passwordIngresado
    };

    let resultado = validarLogin(datosLogin);

     if (resultado) {
        location.href = "index.html";;
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");
    location.href = "login.html";
}

console.log("reserva cargo");

function reservarTurno(){

    let nombreDueno = document.querySelector("#nombreDueno").value.trim();
    let telefono = document.querySelector("#telefono").value.trim();
    let cedula = document.querySelector("#cedula").value.trim();
    let mail = document.querySelector("#mail").value.trim();
    let nombreMascota = document.querySelector("#nombreMascota").value.trim();

    // RADIO → tipo de mascota
    let radioTipoMascota = document.querySelector('input[name="tipoMascota"]:checked');
    let tipoMascota = radioTipoMascota ? radioTipoMascota.value : "";

    // RADIO → servicio
    let radioServicio = document.querySelector('input[name="servicio"]:checked');
    let servicio = radioServicio ? radioServicio.value : "";

    let nombreProfesional = document.querySelector("#nombreProfesional").value.trim();

    // RADIO → tipo de profesional
    let radioTipoProfesional = document.querySelector('input[name="tipoProfesional"]:checked');
    let tipoProfesional = radioTipoProfesional ? radioTipoProfesional.value : "";

    let fecha = document.querySelector("#fecha").value.trim();
    let hora = document.querySelector("#hora").value.trim();

    let datosReserva =
    {
        nombreDueno,
        telefono,
        cedula,
        mail,
        nombreMascota,
        tipoMascota,
        servicio,
        nombreProfesional,
        tipoProfesional,
        fecha,
        hora
    }
    
    let resultado = validarReserva(datosReserva);

    if(resultado){
        let usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
        datosReserva.cedulaUsuario = usuario.cedula;
        guardarReserva(datosReserva);
        alert("Turno reservado correctamente");
    }
}

function verTurnos(){
    location.href = "turnos.html";
}