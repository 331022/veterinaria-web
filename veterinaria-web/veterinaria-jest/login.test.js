//Esto es para que funcionen los test que usan local storage
beforeEach(() => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
  };
  global.localStorage = localStorageMock;
});

let login = require('../src/core/login');
global.alert = jest.fn();

//Login de usuario existente
test('login correcto', () => {
    const datos = { usuario: 'cliente1', password: '1234' };
    const resultado = login.validarLogin(datos);
    expect(resultado).toBe(true);
});

//Login de usuario inexistente
test('usuario correcto y password incorrecto', () => {
    const datos = { usuario: 'cliente1', password: 'wrong' };
    const resultado = login.validarLogin(datos);
    expect(resultado).toBe(false);
});

//Login de usuario inexistente pero contraseña correcta
test('usuario incorrecto', () => {
    const datos = { usuario: 'noExiste', password: '1234' };
    const resultado = login.validarLogin(datos);
    expect(resultado).toBe(false);
});

//Login de usuario vacio
test('usuario vacío', () => {
    const datos = { usuario: '', password: '1234' };
    const resultado = login.validarLogin(datos);
    expect(resultado).toBe(false);
});

//Login de usuario existente sin poner contraseña
test('password vacío', () => {
    const datos = { usuario: 'cliente1', password: '' };
    const resultado = login.validarLogin(datos);
    expect(resultado).toBe(false);
});