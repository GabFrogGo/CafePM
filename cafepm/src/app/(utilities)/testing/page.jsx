//Components
import FolderPopup from '@/src/components/modals/modalslist/modalfolders.jsx'
import GenPassPopup from '@/src/components/modals/modalslist/modalpassword.jsx'
import './testst.scss'

export const metadata = {
    title: 'CafePM | Entorno de Prueba',
}

export default function EPrueba() {
    return (
        <>
            <div>
                <div className='boxz1'>
                    <span>
                        HolaSoyGerman
                    </span>
                </div>
                <div className='contll'>
                    <FolderPopup />
                    <GenPassPopup />
                </div>
            </div>
        </>
    );
}