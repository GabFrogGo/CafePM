import Image from 'next/image';
import SVGFloppy from '@/public/ups/native/device-floppy.svg';
import DownJSON from '@/public/ups/native/download.svg';

export function SaveBTN() {
    return (
        <>
            <div className="standard-svg-container" id="save-action">
                <div className="display-centered-svg">
                    <Image src={SVGFloppy} width={24} height={24}></Image>
                </div>
            </div>
        </>
    )
}

export function CancelBTN() {
    return (
        <>
            <div className="standard-svg-container" id="abort-element">
                <div className="display-centered-svg">
                    Cancel
                </div>
            </div>
        </>
    )
}

export function DownloadBTN() {
    return (
        <>
            <div className="standard-svg-container" id="save-current-element" onClick={ doNewElement }>
                <div className="display-centered-svg">
                    <Image src={DownJSON} width={24} height={24}></Image>
                </div>
            </div>
        </>
    )
}