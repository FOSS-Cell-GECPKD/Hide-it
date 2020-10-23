import React from 'react'
import { Button, Form, Modal, Popover, OverlayTrigger } from 'react-bootstrap'
import copy from "copy-to-clipboard"

export default function ModalContent({ name, val, closeModal }) {
    function handleCopy() {
        copy(val);
    }

    function handleSubmit(e) {
        e.preventDefault();
        closeModal();
    }
    const popover = (
        <Popover id="popover-basic">
            <Popover.Content>
                Copied
          </Popover.Content>
        </Popover>
    );
    return (
        <>
            <Modal.Header closeButton>{name}</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Control as="textarea" value={val} className="m-2" disabled style={{ resize: 'none' }} />
                    <div className="text-right">
                        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                            <Button variant="danger" className="m-2" onClick={handleCopy}>Copy</Button>
                        </OverlayTrigger>
                        <Button variant="secondary" className="m-2" type="submit">Close</Button>
                    </div>
                </Form>
            </Modal.Body>
        </>
    )
}
