import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import EncodedModal from './EncodedModal'
import DecodedModal from './DecodedModal'
import InputBox from './InputBox'
import ClearButton from './ClearButton'

export default function Operativelayout() {
  const [secret, setSecret] = useState("");
  const [mask, setMask] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [encodedShow, setEncodedShow] = useState(false)

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div style={{ width: '98%', maxWidth: '500px', margin: 'auto' }}>
      <Form className="m-1 p-1 mt-2">
        <InputBox value={secret} placeholder="Enter message to Encode/Decode" onChange={(e) => setSecret(e.target.value)} />
        
        <InputBox value={mask} placeholder="Enter your Mask Text here(optional)" onChange={(e) => setMask(e.target.value)} />
        

        <div className="d-flex justify-content-center">
          <Button onClick={() => { setEncodedShow(true); setModalOpen(true) }} className="m-2">Encode</Button>
          <Button onClick={() => { setEncodedShow(false); setModalOpen(true) }} className="m-2">Decode</Button>

          <Modal show={modalOpen} onHide={closeModal}>
            {encodedShow ? <EncodedModal secret={secret} mask={mask} closeModal={closeModal} />
              : <DecodedModal secret={secret} closeModal={closeModal} />}
          </Modal>
        </div>
        <ClearButton onClick={()=>{setMask("");setSecret("");}}/>
      </Form>
    </div>
  );
}
