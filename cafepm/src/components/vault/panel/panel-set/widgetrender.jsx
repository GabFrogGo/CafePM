'use client'

import { usePopupContext } from '@/src/context/InvokePopupsContext.jsx'
import { ModalFP, ModalGPP } from '@/src/components/modals/modalcomp/dynamic-modals.jsx'

export default function WidgetRenders() {

    const { showIPFPWidget, showIPGPPWidget } = usePopupContext();

    return (
        <>
            {showIPFPWidget ? <ModalFP /> : null}
            {showIPGPPWidget ? <ModalGPP /> : null}
        </>
    )
}