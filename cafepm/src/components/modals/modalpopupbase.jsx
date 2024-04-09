'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef } from "react"

// interface ModalProps {
//     functionTitle: String,
//     children: React.ReactNode,
// }

export function NotificationPopup() {
    return (
        <>
            <div className="np-container">
                <div className="np-functions-box">

                    <span id="style-text-elem-info">
                        Element Information:
                    </span>

                    <div>
                        {/*Divisor función o input*/}
                    </div>

                </div>

                <div className="np-buttons-box">
                    {/*Contenedor de botones*/}
                </div>
            </div>
        </>
    )
}