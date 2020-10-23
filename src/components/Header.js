import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InfoModal from "./InfoModal";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="m-2 p-3 text-center" style={{ width: "100%" }}>
        <h2>Hide-It</h2>
      </div>
      <a href="https://github.com/FOSS-Cell-GECPKD/whitespace-stego"
         rel="noopener noreferrer" target="_blank">
        <Button variant="light" style={{ position: "absolute", top: "15px", left: "10px" }}>
          <img src={require("../gh-icon.png")} alt="github-icon" /> Star
        </Button>
      </a>
      <Button variant="secondary" style={{ position: "absolute", top: "15px", right: "10px" }}
        onClick={() => setShow(true)}>
        <span role="img" aria-label="hello">❔</span>
      </Button>
      <InfoModal show={show} onHide={() => setShow(false)} />
    </>
  );
}
