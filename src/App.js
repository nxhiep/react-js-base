import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import GamePage from './pages/game/GamePage';
import CategoryPage from './pages/category/CategoryPage';
import CoursePage from './pages/course/CoursePage';
import LessonPage from './pages/lesson/LessonPage';
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
        <Route exact path={Routes.COURSE_SCREEN} component={CoursePage} />
        <Route exact path={Routes.GAME_SCREEN} component={GamePage} />
        <Route exact path={Routes.LESSON_SCREEN} component={LessonPage} />
      </Switch>
    </Router>
  );
}

export default App;
