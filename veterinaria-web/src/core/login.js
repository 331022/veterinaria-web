console.log("login cargado");

function validarLogin(datosLogin) {

   let usuarios = [
        // ===== CLIENTES =====
        { cedula: "47896523", usuario: "Sofía Martínez", password: "sofia2026", rol: "cliente" },
        { cedula: "51234768", usuario: "Diego Fernández", password: "diegoVet", rol: "cliente" },
        { cedula: "38975412", usuario: "Luciano Pereira", password: "lucho123", rol: "cliente" },
        { cedula: "45671239", usuario: "Camila Rodríguez", password: "camiMascota", rol: "cliente" },

        // ===== EMPLEADOS =====
        { cedula: "29876543", usuario: "Martín López", password: "empleado123", rol: "empleado" },
        { cedula: "31245678", usuario: "Carolina Fernández", password: "empleado321", rol: "empleado" },
        { cedula: "33456789", usuario: "Javier Rodríguez", password: "empleado111", rol: "empleado" },
        { cedula: "28765431", usuario: "Lucía Pereira", password: "empleado222", rol: "empleado" },
        { cedula: "30123456", usuario: "Andrés Morales", password: "empleado333", rol: "empleado" },
        { cedula: "35678912", usuario: "Valentina Gómez", password: "empleado444", rol: "empleado" },
        { cedula: "32456781", usuario: "Sebastián Acosta", password: "empleado555", rol: "empleado" },
        { cedula: "36789123", usuario: "Florencia Silva", password: "empleado234", rol: "empleado" },
        { cedula: "29812345", usuario: "Nicolás Ramos", password: "empleado345", rol: "empleado" },
        { cedula: "34125678", usuario: "Camila Torres", password: "empleado456", rol: "empleado" },
        { cedula: "30987654", usuario: "Paula Méndez", password: "empleado789", rol: "empleado" },
        { cedula: "33214567", usuario: "Bruno Castillo", password: "empleado119", rol: "empleado" },

        // ===== ADMIN =====
        { cedula: "27548963", usuario: "Juana", password: "admin2026", rol: "admin" }
    ];


    for (let i = 0; i < usuarios.length; i++) {

        if (
            usuarios[i].usuario == datosLogin.usuario &&
            usuarios[i].password == datosLogin.password
        ) {
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuarios[i]));
            return true;
        }
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
        validarLogin
    };
}