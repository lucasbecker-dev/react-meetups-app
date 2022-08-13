import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={['/', '', '/react-meetups-app/']} exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/react-meetups-app/new-meetups'>
          <NewMeetupsPage />
        </Route>
        <Route path='/react-meetups-app/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
