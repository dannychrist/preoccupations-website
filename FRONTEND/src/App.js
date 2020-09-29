import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';

// Components
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Home from './pages/components/Home';
import Live from './pages/components/Live';
import Shop from './pages/components/Shop';
import Videos from './pages/components/Videos';
import Music from './pages/components/Music';
import Footer from './shared/components/Navigation/Footer';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <MainNavigation />

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/music'>
              <Music />
            </Route>
            <Route path='/video'>
              <Videos />
            </Route>
            <Route path='/live'>
              <Live />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
          </Switch>

          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
