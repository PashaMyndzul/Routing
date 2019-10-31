import React, {Component,useState} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Modal from './Modal';


export  const ModalWindow = () => {
    const [ isToggleOn, setIsToogleOn] = useState(false);
    
    const handleClick= () => {setIsToogleOn(!isToggleOn)}
    
        return (
            <div>
                            {isToggleOn &&
                                <Modal onClose={handleClick}>
                                    
                                        </Modal>
                            }
            </div>
        );
    
}
ReactDOM.render(<ModalWindow />, document.getElementById('modal-root'));

