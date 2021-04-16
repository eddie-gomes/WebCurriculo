import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import SobreMim from '../pages/SobreMim';
import Competencias from '../pages/Competencias';
import Contatos from '../pages/Contatos';


const DefaultRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sobremim" component={SobreMim} />
      <Route exact path="/competencias" component={Competencias} />
      <Route exact path="/contatos" component={Contatos} />

    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;