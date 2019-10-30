import React, {Fragment,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Modal} from 'react-bootstrap';


export const Example = () => {
    return (
        <Fragment>

<div className="static-modal">
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>One fine body...</Modal.Body>

    <Modal.Footer>
      <Button>Close</Button>
      <Button bsStyle="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
</div>;
        </Fragment>
 
    );
    }