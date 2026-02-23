console.log("login cargado");

function validarLogin(datosLogin) {

    //usuarios de testing
    let usuarios = [
    { cedula: "12345678", usuario: "cliente1", password: "1234", rol: "cliente" },
    { cedula: "87654321", usuario: "empleado1", password: "1234", rol: "empleado" },
    { cedula: "11111111", usuario: "admin1", password: "1234", rol: "admin" }
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