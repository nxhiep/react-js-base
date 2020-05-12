import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import GamePage from './pages/game/GamePage';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME_SCREEN}>
          <HomePage />
        </Route>
        <Route exact path={Routes.ABOUT_SCREEN}>
          <AboutPage />
        </Route>
        <Route exact path={Routes.GAME_SCREEN}>
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;