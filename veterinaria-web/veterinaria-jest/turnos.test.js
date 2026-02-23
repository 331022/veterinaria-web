let turno = require('../src/core/turnos');
global.alert = jest.fn();

// Turnos de ejemplo
const datosTurnoBase = {
    cedulaUsuario: "12345678",
    nombreProfesional: "empleado1",
    fecha: "2026-02-22",
    hora: "10:00",
    nombreMascota: "Firulais",
    nombreDueno: "Juan",
    servicio: "veterinaria"
};

// Usuario admin ve todo
test('admin ve turno de cualquier usuario', () => {
    const usuario = { rol: "admin", usuario: "admin1" };
    const resultado = turno.debeMostrarTurno(usuario, datosTurnoBase);
    expect(resultado).toBe(true);
});

// Cliente ve su propio turno
test('cliente ve su propio turno', () => {
    const usuario = { rol: "cliente", usuario: "cliente1", cedula: "12345678" };
    const resultado = turno.debeMostrarTurno(usuario, datosTurnoBase);
    expect(resultado).toBe(true);
});

// Cliente NO ve turno de otro
test('cliente no ve turno de otro usuario', () => {
    const usuario = { rol: "cliente", usuario: "cliente2", cedula: "87654321" };
    const resultado = turno.debeMostrarTurno(usuario, datosTurnoBase);
    expect(resultado).toBe(false);
});

// Profesional ve turno asignado a su nombre
test('empleado ve turno asignado a su nombre', () => {
    const usuario = { rol: "empleado", usuario: "empleado1" };
    const resultado = turno.debeMostrarTurno(usuario, datosTurnoBase);
    expect(resultado).toBe(true);
});

// Profesional NO ve turno que no es suyo
test('empleado no ve turno de otro profesional', () => {
    const usuario = { rol: "empleado", usuario: "empleado2" };
    const resultado = turno.debeMostrarTurno(usuario, datosTurnoBase);
    expect(resultado).toBe(false);
});