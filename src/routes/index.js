import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/produto/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}
