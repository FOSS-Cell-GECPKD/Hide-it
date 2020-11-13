import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InfoModal from "./InfoModal";
import Gitlogo from '../gh-icon.png'

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#dbdbdb'}}>
      <div className=" nav-brand text-center flex-grow-1 py-2">
        <h2 style={{ marginBottom: '0px', marginLeft: '15%' }}>Hide-It</h2>
      </div>
      <div>
        <a href="https://github.com/FOSS-Cell-GECPKD/whitespace-stego"
          rel="noopener noreferrer" target="_blank" className="m-1">
          <Button size="sm" variant="light">
            <img src={Gitlogo} width="16px" height="16px" alt="github-icon" /> Star
        </Button>
        </a>
        <Button size="sm" variant="secondary" className="m-1"
          onClick={() => setShow(true)}>
          <span role="img" aria-label="hello">❔</span>
        </Button>
        <InfoModal show={show} onHide={() => setShow(false)} />
      </div>
    </nav>

  );
}
