import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';





function App() {
  return (
    <BrowserRouter>
  
    <Switch>
        <Route path='/' render={ () => <div>Home Page</div> } />
        <Route path='/Shop' render={ () => <div>Shop</div> } />
        <Route path='/Reviews' render={ () => <div>Reviews</div> } />
    </Switch>
  
  </BrowserRouter>
  );
}

export default App;
