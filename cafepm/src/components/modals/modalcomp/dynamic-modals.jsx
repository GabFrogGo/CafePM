import FolderPopup from '../modalslist/modalfolders.jsx'
import GenPassPopup from '../modalslist/modalpassword.jsx'

export function ModalFP() {
    return (
        <>
            <div className='popups-lib'>
                <FolderPopup />
            </div>
        </>
    )
}

export function ModalGPP() {
    return (
        <>
            <div className='popups-lib'>
                <GenPassPopup />
            </div>
        </>
    )
}