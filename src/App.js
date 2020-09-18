import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './pages/register/register.page';
import Landing from './pages/landing/landing.page';
import { Provider } from 'react-redux';
import store from './redux/redux';
import Header from './component/header/header.component'
import Footer from './component/bottom/bottom.component'
import LeftDrawer from './component/leftDrawer/leftDrawer.component'
import RightDrawer from './component/rightDrawer/rightDrawer.component'
import Settings from './pages/settings/settings'

function App() {
  return (
    <Provider store={store}>

      <Header />
      <LeftDrawer />

      <div className="main-content">
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/settings' component={Settings} />
      </div>

      <RightDrawer />
      <Footer />
    </Provider>

  );
}

export default App;
