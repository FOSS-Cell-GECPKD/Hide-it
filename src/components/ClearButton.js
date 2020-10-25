import React from 'react'
import {Button} from 'react-bootstrap'

export default function ClearButton({onClick}) {
    return (
        <div style={{textAlign:'center'}} >
          <Button className="py-0" variant="secondary" size="sm" onClick={onClick}>clear all</Button>
        </div>
    )
}
