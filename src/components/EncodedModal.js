import React from 'react'
import textToZeroWidth from "../encode-decode/textToZeroWidth";
import ModalContent from './ModalContent';

export default function EncodedModal({secret,mask,closeModal}) {
    return (
        <ModalContent val={mask+textToZeroWidth(secret)} name="Encoded Message" closeModal={closeModal}/>
    )
}
