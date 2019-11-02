import React, { useState, Fragment, useEffect } from 'react';
import { HeaderList } from './HeaderList';
import { Body } from './Body';
import {
    useHistory,
    Switch,
    Route,
  } from "react-router-dom";
import { routes } from './routes';
export const Reviews = () => {
    let history = useHistory();
    const onclick = () => {history.push(routes.REVIEWS)}; 
    const todosFromStorage = localStorage.getItem('todos');
    const todosParsed = JSON.parse( todosFromStorage );
    const  [ Reviews, setReviews ] = useState( { todos:  todosParsed || [ '' ]  } );
    const  onAdd = todo => { setReviews( {...Reviews, todos: [...Reviews.todos, todo ] } ) };
   
    useEffect( () => {
        const todosString = JSON.stringify( Reviews.todos );
        localStorage.setItem('todos', todosString);
    },[Reviews.todos] );
    return (
        <Fragment>
            <HeaderList onAdd={ onAdd } />  
                <Body todoList={ Reviews.todos } />
                <Switch>
                    <Route  path={ routes.REVIEWSPAGE } 
                          render={ () => <h2>review 
                             <button className='button' onClick={onclick}>back</button>
                         </h2> } />
                </Switch>
        </Fragment>
    )
};