import React from 'react'
import {Button ,Form,Modal} from 'react-bootstrap'
import copy from "copy-to-clipboard"
import textToZeroWidth from "../encode-decode/textToZeroWidth";

export default function EncodedModal({secret,mask,closeModal}) {

    function handleCopy(){
        copy(mask+textToZeroWidth(secret))
    }

    function handleSubmit(e){
        e.preventDefault();
        closeModal();
    }

    return (
        <>
        <Modal.Header closeButton>Encoded Message</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Control as="textarea" value={mask+textToZeroWidth(secret)} className="m-2" disabled style={{resize:'none'}}/>
                <div className="text-right">
                <Button variant="danger" className="m-2" onClick={handleCopy}>Copy</Button>
                <Button variant="secondary" className="m-2" type="submit">Close</Button>
                </div>
                
            </Form>

        </Modal.Body>
        </>
    )
}
