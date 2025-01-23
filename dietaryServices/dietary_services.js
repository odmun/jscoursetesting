
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submitRole');
    const input = document.getElementById('roleInput');
    const output = document.getElementById('accessMessage');

    button.addEventListener('click', function() {
        const role = input.value;
        const message = getAccessMessage(role);
        output.textContent = message;
    });
});

const getAccessMessage = (role) => {
    switch (role) {
        case 'Empleado':
            return 'Tiene acceso a los Servicios Dietéticos.';
        case 'Miembro Inscrito':
            return 'Tiene acceso a los Servicios Dietéticos y a interacción uno a uno con un dietista.';
        case 'Suscriptor':
            return 'Tiene acceso parcial para facilitar los Servicios Dietéticos únicamente.';
        case 'No Suscriptor':
            return 'Necesita inscribirse o al menos suscribirse primero para poder acceder a esta instalación.';
        default:
            return 'Rol no reconocido. Por favor, verifique su rol en la organización.';
    }
}

// Ejemplo de uso:
//const role = 'Miembro Inscrito'; // Cambie este valor para probar diferentes roles
//console.log(getAccessMessage(role));