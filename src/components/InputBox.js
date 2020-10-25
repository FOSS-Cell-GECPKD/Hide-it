import React from 'react'
import {InputGroup,Form} from 'react-bootstrap'


export default function InputBox({placeholder,onChange,value}) {
    return (
        <>
        <InputGroup className="p-2">
          <Form.Control
            
            as="textarea"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={{ resize: "none",height:'80px', marginBottom:'10px'}}
          />
        </InputGroup>
        </>
    )
}
