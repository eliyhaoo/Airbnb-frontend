import './assets/styles/main.scss'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes.js'
import { AppHeader } from './cmps/app-header-cmps/app-header'
import { AppFooter } from './cmps/general-cmps/app-footer'
import { UserMsg } from './cmps/general-cmps/user-msg'
import { useDispatch } from 'react-redux'
import { loadUser } from './store/actions/user.actions'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <main className='main-layout'>
        <Switch>
          {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <UserMsg />
      <AppFooter />

    </div>
  );
}

export default App;


