function enviarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Crear un objeto con los datos del formulario
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Realizar la solicitud HTTP usando fetch con el método POST
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Registro exitoso.');
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        alert('Error al enviar la solicitud. Verifica la consola para más detalles.');
    });
}
