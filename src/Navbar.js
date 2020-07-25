import React from 'react';
import { Nav} from 'react-bootstrap';
import './styles/toolBar.css';

const ToolBar = () => {
  return (

     <div className="toolbar">

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="Link " href="/home"><img src="https://img.icons8.com/wired/20/000000/open-book.png"/>Overview</Nav.Link>

        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="Link" eventKey="link-1" active> <img src="https://img.icons8.com/material-outlined/20/000000/repository.png"/>Repositories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="Link" eventKey=" link-2"><img src="https://img.icons8.com/wired/20/000000/product-documents.png"/>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="Link" eventKey="link-3" >
            <img src="https://img.icons8.com/wired/20/000000/sugar-cube.png"/>Packages
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </div>

  )

};


export default ToolBar;
