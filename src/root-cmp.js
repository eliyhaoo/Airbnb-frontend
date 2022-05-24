import React from 'react';
import { Route, Switch,NavLink } from 'react-router-dom'
import './assets/styles/main.scss';
import routes from './routes.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/'>Home</NavLink>
        Hey header
      </header>
      <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
    </div>
  );
}

export default App;


// import { Route, Switch } from "react-router-dom";
// import routes from './routes.js'

// export function App() {
//   return (
//     <div className="app main-layout">
//       {/* <AppHeader /> */}
//       <main>
//         <Switch>
//           {/* {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)} */}
//                <Route  path={'/'} component={<HomePage/>}/>
//         </Switch>
//       </main>
//     </div>
//   )
// }
 
