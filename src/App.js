//comments

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
import Schedule from './pages/schedule/schedule'
import Categories from './pages/categories/categories'
import Progress from './pages/progress/progress';
import Messages from './pages/messages/messages';
import VideoConf from './pages/workoutPlayer/videoConf';
import Chat from './component/chat/chat';


function App() {
  return (
    <Provider store={store}>

    <Header />
    <LeftDrawer />

      <div className="main-content">
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/progress' component={Progress} />
        <Route exact path='/messages' component={Messages} />
        <Route exact path='/videoConf' component={VideoConf} />
        <Route exact path='/chat' component={Chat} />
      </div>

      <RightDrawer /> 
      <Footer />
   </Provider>

  );
}

export default App;
