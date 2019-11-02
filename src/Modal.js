import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


import './index.css';


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
   
  <Fragment>
    
            <div className="modal">
                <button className="modal__button" onClick={hide}>OK</button>
                <h1>There is no products now </h1>
            </div>,
  </Fragment>, document.body
) : null;

export default Modal;

