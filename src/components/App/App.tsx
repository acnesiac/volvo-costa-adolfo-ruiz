import axios from 'axios';
import { Fragment } from 'react';
import { HashRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { store } from '../../state/store';
import { useStoreWithInitializer } from '../../state/storeHooks';
import { Home } from '../Pages/Home/Home';
export function App() {
  return (
    <HashRouter>
        <Fragment>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Fragment>
    </HashRouter>
  );
}

