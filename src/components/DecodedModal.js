import React from 'react'
import zeroWidthToText from "../encode-decode/zeroWidthToText";
import ModalContent from './ModalContent';

export default function DecodedModal({ secret, closeModal }) {

    return (
        <ModalContent val={zeroWidthToText(secret.replace(/[^​‌‍﻿]/g, ''))} 
            name="Decoded Message" closeModal={closeModal} />
    )
}
