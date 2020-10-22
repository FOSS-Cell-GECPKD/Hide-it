import React from 'react'
import {Button} from 'react-bootstrap'

export default function Header() {
    return (
        <>
        <div className="m-2 p-3 text-center" style={{width:'100%'}}>
            <h2 style={{}}>Hide-It</h2>
        </div>
        <Button variant="secondary" style={{position: 'absolute',top:'10px',right: '10px'}}>info</Button>
        
        </>
    )
}
