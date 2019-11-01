import React, { Fragment } from "react";
import T from 'prop-types'; 
import { logProps } from './hoc';
const BodyComponent = ({todoList}) => {
    return(
        <Fragment>

            {todoList.map( ( todo, index ) => <div key={index}>{todo}</div>)}

        </Fragment>
    );
};
BodyComponent.defaultProps = { todoList: [] } ;
BodyComponent.defaultProps = 'TodoList';
BodyComponent.propTypes = { todoList: T.arrayOf( T.string ) };
export const Body = logProps(BodyComponent)