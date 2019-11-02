import React, { Fragment } from "react";
import T from 'prop-types'; 
import { logProps } from './hoc';
import { Link } from "react-router-dom";
import { routes } from "./routes";

const BodyComponent = ( { todoList } ) => {
    return(
        <Fragment>

            {todoList.map( ( todo, index ) => (
                <ul key={ index }>
                    <li >
                        <Link to={ routes.REVIEWSPAGE } className='navdar'  >{ todo }</Link>    
                    </li>
                </ul>
                    )
                )
            }
        </Fragment>
    );
};
BodyComponent.defaultProps = { todoList: [] } ;
BodyComponent.defaultProps = 'TodoList';
BodyComponent.propTypes = { todoList: T.arrayOf( T.string ) };
export const Body = logProps(BodyComponent)