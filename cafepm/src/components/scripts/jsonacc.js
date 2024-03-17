const fs = require('fs');

function guardarFormularioEnJSON(UserINPUTData) {
    // Especificar la ruta y el nombre del archivo donde se guardará el JSON
    const rutaArchivo = './cafepm_userdb_.json'; //_convertir string(correo invertido) a numeros al azar max 12(idea)

    // Leer el contenido actual del archivo JSON (si existe)
    let contenidoExistente = [];
    try {
        contenidoExistente = JSON.parse(fs.readFileSync(rutaArchivo, 'utf8'));
    } catch (err) {
        console.error('Error al leer el archivo JSON:', err);
    }

    // Agregar el nuevo elemento del formulario al contenido existente
    contenidoExistente.push(UserINPUTData);

    // Convertir el contenido actualizado a una cadena JSON
    const datosJSON = JSON.stringify(contenidoExistente);

    // Escribir los datos JSON actualizados en el archivo
    fs.writeFile(rutaArchivo, datosJSON, 'utf8', (err) => {
        if (err) {
            console.error('Error al guardar el archivo JSON:', err);
            return;
        }
        console.log('El nuevo elemento ha sido agregado al archivo JSON.');
    });
}

// Ejemplo de uso: Llamada a la función guardarFormularioEnJSON con los datos del formulario
const nuevoElemento = {
    nombre: 'Nuevo',
    email: 'nuevo@example.com'
};
guardarFormularioEnJSON(nuevoElemento);