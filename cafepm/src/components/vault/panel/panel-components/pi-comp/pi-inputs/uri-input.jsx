//'use client';

import React, { useState } from 'react';

function Gen_URI_Input() {
    const [uris, setUris] = useState([1]); // Inicializamos con un URI
    const [counter, setCounter] = useState(1);

    const agregarNuevoURI = () => {
        const nuevoNumeroURI = counter + 1;
        setCounter(nuevoNumeroURI);
        setUris([...uris, nuevoNumeroURI]);
    };

    const reasignarNumeros = (uris) => {
        let nuevoUris = [];
        uris.forEach((uri, index) => {
            const nuevoNumeroURI = index + 1;
            if (uri !== nuevoNumeroURI) {
                nuevoUris.push(nuevoNumeroURI);
            } else {
                nuevoUris.push(uri);
            }
        });
        return nuevoUris;
    };
    
    // Luego, puedes utilizar esta función cuando elimines un URI:
    const deleteURI = (numeroURI) => {
        const noURI = uris.filter(uri => uri !== numeroURI);
        const urisActualizados = reasignarNumeros(noURI);
        setUris(urisActualizados);
    };
    
    

    return (
        <>
            <div className="deco-panel-info" id="uri-elements">
                {uris.map(numeroURI => (
                    <div key={numeroURI} className="uri-element-prev">
                        <span className="elem-uri" name={`uris-${numeroURI}`}>
                            <div className="elem-uri-icon">
                                <svg onClick={() => deleteURI(numeroURI)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v8" />
                                    <path d="M16 19h6" />
                                </svg>
                            </div>
                            <div className="elem-uri-info">
                                <div>
                                    <span className="elem-uri-input">
                                        <label htmlFor={`URI-INP-${numeroURI}`}>URI {numeroURI}</label>
                                        <input name={`uri-${numeroURI}`} id={`URI-INP-${numeroURI}`} type="text" placeholder="ex. https://cafenetix.com"></input>
                                    </span>
                                </div>
                            </div>
                        </span>
                    </div>
                ))}
                <div id="adduri-dir" onClick={agregarNuevoURI}>
                    <span className="adduri-cont-style">
                        <div className="adduri-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v5" /><path d="M16 19h6" />
                                <path d="M19 16v6" />
                            </svg>
                        </div>
                        <div>
                            <span>New URI</span>
                        </div>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Gen_URI_Input;