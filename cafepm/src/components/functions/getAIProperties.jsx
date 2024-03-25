export function getCrDate() {
    const date = new Date().toJSON();
    return date;
}

export function getID() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Función auxiliar para generar un bloque de caracteres aleatorios
    function genRandomChunk(length) {
        let block = '';
        for (let i = 0; i < length; i++) {
            block += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return block;
    }

    const PT1 = genRandomChunk(8);  // Cambia el número de caracteres para PT1
    const PT2 = genRandomChunk(4);  // Cambia el número de caracteres para PT2
    const PT3 = genRandomChunk(4);  // Cambia el número de caracteres para PT3
    const PT4 = genRandomChunk(12); // Cambia el número de caracteres para PT4

    result = [PT1, "-", PT2, "-", PT3, "-", PT4].join('');
  
    return result;
}

// // Ejemplo de uso
// var bloquesAleatorios = getID();
// console.log(bloquesAleatorios);
