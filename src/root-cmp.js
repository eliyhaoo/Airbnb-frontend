import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './assets/styles/main.scss'
import routes from './routes.js'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

function App() {
  return (
    <div className="App main-layout">
      <AppHeader />

      <Switch>
        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
      <AppFooter />

    </div>
  );
}

export default App;


