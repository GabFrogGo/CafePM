'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CancelBTN } from "../../buttons/shared/modalbuttons.jsx";
import CopyPass from '@/public/ups/native/copy.svg';
import RLPass from '@/public/ups/native/refresh-dot.svg';
import '@/src/components/modals/modalstyles/basemodal.scss';
import '@/src/components/modals/modalstyles/modalpass.scss';

export default function GenPassPopup() {
    const [value, setValue] = useState({
        capitalltinclude: true,
        noncapitalltinclude: true,
        numbersinclude: true,
        specialcharsinclude: true,
    });

    const [passLongitude, setPassLongitude] = useState(12);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleCKChange = (event) => {
        const { name, checked } = event.target;
        setValue(prevState => ({
            ...prevState,
            [name]: checked
        }));

        // if(!checked) {
        //     setValue(prevState => ({
        //         ...prevState,
        //         noncapitalltinclude: true
        //     }));
        // }
    };

    useEffect(() => {
        handleGenPass();
    }, [passLongitude, value]);

    const doPass = (length) => {
        let charset = '';
        if (value.capitalltinclude) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (value.noncapitalltinclude) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (value.numbersinclude) charset += '0123456789';
        if (value.specialcharsinclude) charset += '!@#$%^&*';
    
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
    
        return password;
    }
    
    const handleGenPass = () => {
        const newPass = doPass(passLongitude);
        setGeneratedPassword(newPass);
    };

    return (
        <>
            <div className="np-container">
                <div className="np-functions-box">

                    <span className="modal-action-text">
                        <div>Generator</div>
                    </span>

                    <span className="modal-passkeeper-container">
                        <div className="passarea">
                            <span>
                                {generatedPassword}
                            </span>
                        </div>
                        <div className="passbuttons">
                            <span>
                                <CopyToClipboard text={generatedPassword}>
                                    <Image src={CopyPass} />
                                </CopyToClipboard>
                            </span>
                            <span>
                                <Image src={RLPass} onClick={handleGenPass}/>
                            </span>
                        </div>
                    </span>

                    <span className="modal-settings-box">
                        <SettingPassLong passLongitude={passLongitude} setPassLongitude={setPassLongitude} />

                        <span className="setting-tab">
                            <label htmlFor="psschk1">A-Z</label>
                            <input 
                                name="capitalltinclude" 
                                id="psschk1" 
                                autoComplete="off" 
                                type="checkbox"
                                checked={value.capitalltinclude} 
                                onChange={handleCKChange}>
                            </input>
                        </span>

                        <span className="setting-tab">
                            <label htmlFor="psschk2">a-z</label>
                            <input 
                                name="noncapitalltinclude" 
                                id="psschk2" 
                                autoComplete="off" 
                                type="checkbox"
                                checked={value.noncapitalltinclude} 
                                onChange={handleCKChange}>
                            </input>
                        </span>

                        <span className="setting-tab">
                            <label htmlFor="psschk3">0-9</label>
                            <input 
                                name="numbersinclude" 
                                id="psschk3" 
                                autoComplete="off" 
                                type="checkbox"
                                checked={value.numbersinclude} 
                                onChange={handleCKChange}>
                            </input>
                        </span>

                        <span className="setting-tab">
                            <label htmlFor="psschk4">!@#$%^&*</label>
                            <input 
                                name="specialcharsinclude" 
                                id="psschk4" 
                                autoComplete="off" 
                                type="checkbox"
                                checked={value.specialcharsinclude} 
                                onChange={handleCKChange}>
                            </input>
                        </span>
                    </span>

                </div>

                <div className="np-buttons-box">
                    <CancelBTN />
                </div>
            </div>
        </>
    );
}

function SettingPassLong({ passLongitude, setPassLongitude }) {
    const handleLongitudeChange = (event) => {
        setPassLongitude(parseInt(event.target.value));
    }

    return ( 
        <>
            <span className="setting-tab">
                <label htmlFor="pssbar">Longitude</label>
                <span>{passLongitude}</span>
                <input 
                    name="passlong" 
                    id="pssbar" 
                    autoComplete="off" 
                    type="range"
                    value={passLongitude}
                    onChange={handleLongitudeChange}
                    min="5"
                    max="128"
                />
            </span>
        </>
    );
}