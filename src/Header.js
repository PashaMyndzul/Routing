import React from 'react';
import {Link} from 'react-router-dom';

import { routes } from './routes'
import { useLocation } from 'react-router-dom';
export const Header = () => {
    const { pathname } = useLocation();
    return pathname === routes.REVIEWSPAGE ? null : (
        <nav className='navbar'>
            <ul>
                <li>
                     <Link to= { routes.HOME } >Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                     <Link to= { routes.SHOP } >Shop</Link>
                </li>
            </ul>
            <ul>
                <li>
                   <Link to= { routes.REVIEWS } >Reviews</Link>
                </li>
            </ul>
        </nav>
    )
};