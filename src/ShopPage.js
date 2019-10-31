import React, {Fragment,useState} from 'react';

import Modal from './Modal';

export const ShopPage = () => {
    const [ isToggleOn, setIsToogleOn] = useState(false);
    
    const handleClick= () => {setIsToogleOn(!isToggleOn)}
  
    return (
        <Fragment>

            <h2>Welcome to Shop</h2>
            <button className='button'>Purchase</button>
            <button className='button' onClick={()=>setIsToogleOn(!isToggleOn)}>BUY</button>

                    
            {isToggleOn &&
                        <Modal onClose={handleClick}>
                          <h1>There is no products now</h1>
                        </Modal>
                    }
            
        </Fragment>
    );
};
