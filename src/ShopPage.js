import React, {Fragment} from 'react';

import {useLocation} from 'react-router-dom';
import {Example} from './ModalWindow';


export const ShopPage = () => {

    
    const location = useLocation();
    return (
        <Fragment>

            <h2>Welcome to Shop</h2>
            <button className='button' onClick={()=> <Example />}>Purchase</button>
            <button className='button'>BUY</button>
            
        </Fragment>
    );
};