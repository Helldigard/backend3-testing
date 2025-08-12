const { describe } = require("yargs");

// Test funcion login
describe('Test de login', () => {
    test('Login con Credenciales correctas', () => {
        expect(Login('admin', '1234')).toBe('Login exitoso');
    });

    test('Login con Credenciales incorrectas', () => {
        expect(Login('admin', 'wrongpassword')).toBe('Credenciales incorrectas');
    });
})