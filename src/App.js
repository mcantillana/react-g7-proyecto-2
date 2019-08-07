import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import EpisodesPage from './pages/EpisodesPage';
import CharacterPage from './pages/CharacterPage';
import { SimilarTastesPage } from './pages/SimilarTastesPage';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/sign_in" component={RegisterPage} />
          <Route exact path="/dashboard" component={DashboardPage} /> 
          <Route exact path="/dashboard/characters" component={CharacterPage} /> 
          <Route exact path="/dashboard/episodes" component={EpisodesPage} /> 
          <Route exact path="/dashboard/similar-tastes" component={SimilarTastesPage} /> 
        </Switch>  
    </BrowserRouter>
    </Provider>
  );
}

export default App;
