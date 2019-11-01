import React, {Fragment} from 'react';

import Modal from './Modal';
import useModal from './useModal';


export const ShopPage = () => {
    const { isShowing, toggle } = useModal();
    
    
  
    return (
        <Fragment>

            <h2>Welcome to Shop</h2>
            <button className='button'>Purchase</button>
            <button className='button' onClick={toggle}>BUY</button>

            <Modal
        isShowing={isShowing}
        hide={toggle}
      />
            
        </Fragment>
    );
};
