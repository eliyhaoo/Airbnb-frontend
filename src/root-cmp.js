import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './assets/styles/main.scss'
import routes from './routes.js'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserMsg } from './cmps/user-msg'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser } from './store/actions/user.actions'




function App() {

  const { visitedPage } = useSelector(storeState => storeState.systemModule)
  const dispatch = useDispatch()


  useEffect(() => {
    console.log('LOADING USER FROM ROOTCMP!');
    dispatch(loadUser())
  }, [])

  return (
    <div className="App main-layout">
      {visitedPage !== 'dashboard-page' && <AppHeader />}
      <Switch>
        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
      <UserMsg />
      <AppFooter />

    </div>
  );
}

export default App;


