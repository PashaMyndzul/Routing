import React, {  Fragment, useState } from 'react';
import T from 'prop-types';

export const HeaderList = ({onAdd}) => {
    const [inputValue, setInputValue] = useState('');
    const  onChange = event => {setInputValue( event.target.value ) };
    const onSubmit = event => {
        event.preventDefault();
        if (inputValue === '') return;
        onAdd(inputValue);
        setInputValue('');
    };
  

    return (
        <Fragment>
            <form className='form' onSubmit={onSubmit} > InputValue :
               <input  value={inputValue} onChange={onChange} />
              
            </form>    
      </Fragment>
    );
};
HeaderList.propsTypes ={
    onAdd: T.func.isRequired,
};