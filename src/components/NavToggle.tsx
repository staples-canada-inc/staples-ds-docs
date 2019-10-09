import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import Collapse from 'react-bootstrap/Collapse'

const [open, setOpen] = useState(false);

export function CustomCollapse(){
    <Nav vertical key={item.key} className="mb-3">
    <h5 className="mb-0" 
      onClick={() => setOpen(!open)}
      aria-controls={item.key}
      aria-expanded={open}
  >
      <strong>{item.title}</strong>
    </h5>
    <Collapse in={open}>
      <div id={item.key} >
          {loop(item.children)}
      </div>
    </Collapse>
  </Nav>
}