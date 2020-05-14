import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import GamePage from './pages/game/GamePage';
import CategoryPage from './pages/category/CategoryPage';
import Course from './pages/course/CoursePage';
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
        <Route exact path={Routes.CATEGORY_SCREEN} component={CategoryPage} />
        <Route exact path={Routes.COURSE_SCREEN} component={Course} />
        <Route exact path={Routes.GAME_SCREEN} component={GamePage} />
      </Switch>
    </Router>
  );
}

export default App;
