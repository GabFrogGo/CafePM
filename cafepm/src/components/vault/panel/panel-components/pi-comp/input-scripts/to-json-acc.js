// //import fs from 'next/dist/compiled/webpack/webpack';
// const fs = require('fs')
// // const fs = require('fs-extra');

// function saveForm(data) {
//     // Leer el contenido actual del archivo JSON (si existe)
//     let existentContent = [];
//     try {
//         existentContent = JSON.parse(fs.readFileSync('./uservault.json', 'utf8'));
//     } catch (err) {
//         console.error('Error al leer el archivo JSON:', err);
//         existentContent = null;
//     }

//     if (existentContent === null) {
//         try {
//             existentContent = [data];
//         } catch (err) {
//             console.error('Error al tratar de crear una bóbeda.', err);
//         }
//     } else {
//         try {
//             existentContent.push(data);
//         } catch (err) {
//             console.error('No se pudo agregar el elemento a la lista.', err);
//         }
//     }

//     // Convertir el contenido actualizado a una cadena JSON
//     const dataToJSON = JSON.stringify({ items: existentContent }, null, 2); // Formateo para una mejor legibilidad

//     // Escribir los datos JSON actualizados en el archivo
//     fs.writeFile('./uservault.json', dataToJSON, 'utf8', (err) => {
//         if (err) {
//             console.error('Error al guardar el archivo JSON:', err);
//             return;
//         }
//         console.log('El nuevo elemento ha sido agregado al archivo JSON.');
//     });
// }

// // Obtener los valores de los elementos del formulario
// //const name = formData.name;
// //const username = formData.username;
// //const email = formData.email;
// //const password = formData.password;
// //const totp = formData.totp;

// //Otros
// //const notes = formData.notes;
// //const favourite = formData.favourite;
// //const askpass = formData.askpass;

// //uris no prioritario


// // Crear el objeto nuevoElemento con las variables
// const newElement = {
//     creationDate: getCrDate(),
//     upDate: null, //getLastUpdate(),
//     elementID: "", //función para crear id
//     folderID: null, //default
//     type: 1, //tipo de elemento
//     //askPwd: askpass, //default 0
//     //favourite: favourite, //default 0
//     name: name,
//     notes: notes,
//     login: {
// 	    uris: [],
//         username: username,
//         email: email,
//         password: password,
//         totp: totp //default
//     }
// };

// function getCrDate() {
//     const fecha = new Date();
//     return fecha.toISOString();
// }

// module.exports = saveForm;

// // Llamar a la función para guardar en JSON
// //saveForm(newElement);