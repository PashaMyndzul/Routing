import React, {useRouteMatch, Link, Route} from 'react';
import ReactDOM from 'react-dom';
import { routes } from './routes';

import './index.css';


export default class Modal extends React.Component {
    
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                <button className="modal__close-button"  >OK</button>
                {this.props.children}
            </div>,
            this.root
        );
    }
}