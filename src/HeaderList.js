import React, {  Fragment, useState } from 'react';


export const HeaderList = ({onAdd}) => {
    const [inputValue, setInputValue] = useState();
    const  onChange = event => {setInputValue( event.target.value ) };
    const onClick = () => {
        onAdd(inputValue);
        setInputValue('');
    };
  

    return (
        <Fragment>
            <div> 
               <input value={inputValue} onChange={onChange} />
               <button className='button' onClick={onClick}>Add</button>
            </div>    
      </Fragment>
    );
};