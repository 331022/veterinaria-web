let reserva = require('../src/core/reservas');
global.alert = jest.fn();

//objeto correcto
const datosReservaBase = {
    nombreDueno: "Juan",
    telefono: "099123456",
    cedula: "12345678",
    mail: "juan@gmail.com",
    nombreMascota: "Firulais",
    tipoMascota: "perro",
    servicio: "veterinaria",
    nombreProfesional: "Ana",
    tipoProfesional: "veterinario",
    fecha: "2026-02-10",
    hora: "10:00"
};


//validar nombre de dueño no vacio
test('nombre de dueño vacio', () => {
    const datos = { ...datosReservaBase, nombreDueno: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false);
});

//validar nombre con espacios al inicio
test('nombre de con espacios', () => {
    const datos = { ...datosReservaBase, nombreDueno: ' Juan' };
    const resultado = reserva.validarReserva(datos);
    expect(resultado).toBe(true);
});

//Validar nombre no tenga numeros
test('nombre de dueño no tenga numeros', () => {
    const datos = { ...datosReservaBase, nombreDueno: 'Mateo 23' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false);
});

//Validar telefono con 9 digitos, en este caso le pasamos 10 digitos
test('telefono con cantidad correcta de digitos', () => {
    const datos = { ...datosReservaBase, telefono: '0987654321' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//Validar telefono que tenga solo numeros
test('telefono con solo numeros', () => {
    const datos = { ...datosReservaBase, telefono: '09cdqwerw' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar telefono que no arranca con 09
test('telefono inicia con 09', () => {
    const datos = { ...datosReservaBase, telefono: '12345678' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar telefono no vacio
test('telefono dueño vacio', () => {
    const datos = { ...datosReservaBase, telefono: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar telefono con espacios
test('telefono sin espacios', () => {
    const datos = { ...datosReservaBase, telefono: '09 12 23 45' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar cedula no vacia
test('cedula vacia', () => {
    const datos = { ...datosReservaBase, cedula: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar cedula que no tenga letras
test('cedula sin letras', () => {
    const datos = { ...datosReservaBase, cedula: 'abcdqwer' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar cedula que no tenga 8 digitos
test('cedula solo 8 digitos', () => {
    const datos = { ...datosReservaBase, cedula: '12345' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar cedula que no tenga espacios
test('cedula sin espacios', () => {
    const datos = { ...datosReservaBase, cedula: '1234 5678' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar mail vacio
test('mail vacio', () => {
    const datos = { ...datosReservaBase, mail: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar mail sin @gmail.com o @hotmail.com
test('mail en correcto formato', () => {
    const datos = { ...datosReservaBase, mail: 'pedro@outlook.com' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar mail con espacios
test('mail que no tenga espacios', () => {
    const datos = { ...datosReservaBase, mail: 'pedro martinez@gmail.com' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar nombre mascota vacio
test('nombre de mascota vacio', () => {
    const datos = { ...datosReservaBase, nombreMascota: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar tipo mascota solamente Perro o Gato
test('solo perro o gato de mascota', () => {
    const datos = { ...datosReservaBase, tipoMascota: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar tipo mascota perro
test('perro funcional como mascota', () => {
    const datos = { ...datosReservaBase, tipoMascota: 'perro' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(true)
});

//validar tipo servicio no vacio
test('tipo de servicio no vacio', () => {
    const datos = { ...datosReservaBase, nombreMascota: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar tipo servicio veterinaria
test('tipo de servicio funciona opcion veterinaria', () => {
    const datos = { ...datosReservaBase, servicio: 'veterinaria' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(true)
});

//validar hora no vacia
test('hora no vacia', () => {
    const datos = { ...datosReservaBase, hora: '' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false)
});

//validar hora entre 9 y 18
test('hora intervalo incorrecto', () => {
    const datos = { ...datosReservaBase, hora: '20:00' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(false);
});


//validar hora valida entre 9 y 18
test('hora intervalo correcto', () => {
    const datos = { ...datosReservaBase, hora: '09:30' };

    const resultado = reserva.validarReserva(datos);

    expect(resultado).toBe(true);
});
