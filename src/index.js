import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Header } from './Header';
import { routes } from './routes';
import { ShopPage } from './ShopPage';
import { Reviews } from './Reviews';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ routes.HOME} render={ () => <h2>Welcome to Home</h2> } />
          <Route path={ routes.SHOP } component={ ShopPage } />
          <Route path={ routes.REVIEWS } component={ Reviews } />
        </Switch>
    
    </BrowserRouter>
  );

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
