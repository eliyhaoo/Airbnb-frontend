import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './assets/styles/main.scss'
import routes from './routes.js'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserMsg } from './cmps/user-msg'
import { useSelector } from 'react-redux'


function App() {
  const { visitedPage } = useSelector(storeState => storeState.systemModule)
  return (
    <div className="App main-layout">
      <AppHeader />
      <Switch>
        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
      <UserMsg />
      {visitedPage !== 'home-page' && <AppFooter />}

    </div>
  );
}

export default App;


