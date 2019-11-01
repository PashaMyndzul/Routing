import React, { useState, Fragment, useEffect } from 'react';
import { HeaderList } from './HeaderList';
import { Body } from './Body';


export const Apps = () => {
    const todosFromStorage = localStorage.getItem('todos');
    const todosPasded = JSON.parse(todosFromStorage);
    const  [ apps, setApps ] = useState( { todos:  [ '' ]  } );
    const  onAdd = todo => { setApps( {...apps, todos: [...apps.todos, todo] } ) };
   //console.log(todo);
    useEffect( () => {
        const todosStr = JSON.stringify(apps.todos);
        localStorage.setItem('todos', todosStr);
    },[apps.todos] );

    return (
        <Fragment>
        <HeaderList onAdd={ onAdd } />
        <Body todoList={ apps.todos } />
      </Fragment>
    )
};