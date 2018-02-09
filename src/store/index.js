import {createStore,applyMiddleware} from "redux"
import reducer from "../reduser"
import logger from "../middlware/logger"
import addComment from "../middlware/addComment"
import api from "../middlware/api"
import thunk from "redux-thunk" 
import {routerMiddleware} from "react-router-redux"
import history from "../history"

  
const enhancer = applyMiddleware(thunk,api,addComment,routerMiddleware(history),logger)
const store=createStore(reducer,
    {},
    enhancer) 
window.store=store;
export default store;