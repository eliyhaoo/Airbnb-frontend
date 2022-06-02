
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'



import { userReducer } from './reducers/user.reducer'
import { stayReducer } from './reducers/stay.reducer'
import { systemReducer } from './reducers/system.reducer' 
import { reserveReducer } from './reducers/reserve.reducer'


const rootReducer = combineReducers({
    userModule: userReducer,
    stayModule: stayReducer,
    reserveModule: reserveReducer,
    systemModule: systemReducer

})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))


