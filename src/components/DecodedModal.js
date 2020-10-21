import React from 'react'
import {Button ,Form,Modal} from 'react-bootstrap'

export default function EncodedModal({closeModal}) {

    function handleCopy(){
    }
    function handleSubmit(e){
        e.preventDefault();
        closeModal();

    }
    return (
        
        <>
        <Modal.Header closeButton>Decoded Message</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Control as="textarea" className="m-2" style={{resize:'none'}}/>
                <div className="text-right">
                <Button variant="danger" className="m-2" onClick={handleCopy}>Copy</Button>
                <Button variant="secondary" className="m-2" type="submit">Close</Button>
          </div>
                
            </Form>

        </Modal.Body>
        </>
    )
}
