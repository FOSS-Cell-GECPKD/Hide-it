import React from 'react'
import {InputGroup,Form} from 'react-bootstrap'


export default function InputBox({placeholder,onChange,value}) {
    return (
        <>
        <InputGroup className="m-2">
          <Form.Control
            
            as="textarea"
            required
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={{ resize: "none" ,marginBottom:'20px' }}
          />
        </InputGroup>
        </>
    )
}
