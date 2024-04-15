import { promises as fs } from 'fs';

export async function JSONPip() {
    const filePath = process.cwd() + '/src/app/(utilities)/testing/data.json';
    const config = { ip: '190.20.1.109', port: 3301 };
    try {
        // Es importante leer los datos del archivo primero antes de escribir en él
        const fileData = await fs.readFile(filePath, 'utf-8');
        const newData = JSON.stringify(config, null, 2);
        await fs.writeFile(filePath, newData);
        console.log('Datos escritos correctamente');
        console.log(newData); // Nuevo contenido del archivo
    } catch (error) {
        console.error('Error al escribir datos:', error);
    }
}