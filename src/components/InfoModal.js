import React from 'react'
import { Modal } from 'react-bootstrap'

export default function InfoModal(props) {
    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>How not to get stuck <span role="img" aria-label="emoji">😅</span></b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 style={{color:'#6f42c1'}}>How to Encode</h5>
                <ol>
                    <li>In the First Textarea,Type the text you want to Encode.</li>
                    <li>In the Second Textarea,Type a mask text - this will be the message others see</li>
                    <li>Click Encode Button</li>
                    <li>Tadaaa...</li>
                </ol>
                <h5 style={{color:'#6f42c1'}}>How to Decode</h5>
                <ol>
                    <li>In the First Textarea,Type the text you want to Decode.</li>
                    <li>Click Decode Button saying Abracadabra</li>
                    <li>Refresh if you want to decode again</li>
                </ol>
                <p style={{ color: 'grey' }}><i>Tip :Try decoding the paragraph below Heading in the main page</i></p>
            </Modal.Body>
        </Modal>
    )
}
