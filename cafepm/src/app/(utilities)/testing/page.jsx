//Components
import './testst.scss'

export const metadata = {
    title: 'CafePM | Entorno de Prueba',
}

export default function EPrueba() {
    const [hacerAccion, setHacerAccion] = useState(false);

    const handleAccion = () => {
        setHacerAccion(!hacerAccion);
    };

    return (
        <>
            <div>
                <div className='boxz1'>
                    <span>HolaSoyGerman</span>
                </div>
                <div>
                    <input name='folders-inp' type='text' />
                    <div className='accion' onClick={handleAccion}>Crea una carpeta</div>
                </div>
            </div>
        </>
    );
}