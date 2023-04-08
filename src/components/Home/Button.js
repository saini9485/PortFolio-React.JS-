import React from 'react'
// import Nav from "react-bootstrap/Nav";
import "./Button.css"

export function Button() {
    return (
        <div className='buttonDiv'>

{/* <Nav.link className="fork-btn"> */}
              {/* <Button
                href="https://github.com/saini9485"
                target="_blank"
                className="fork-btn-inner"
              >
                Github
              </Button> */}
            {/* </Nav.link> */}
            <a href="https://github.com/saini9485" className='Resume'>Resume</a>
            {/* <a href="#" className='Contact'>Contact</a> */}
        </div>
    )
}
