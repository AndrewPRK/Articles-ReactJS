import {createStore,applyMiddleware} from "redux"
import reducer from "../reduser"
import logger from "../middleware/logger"
import addComment from "../middleware/addComment"
import api from "../middleware/api"
import thunk from "redux-thunk" 
import {routerMiddleware} from "react-router-redux"
import history from "../history"

const enhancer = applyMiddleware(thunk, api, addComment, routerMiddleware(history), logger)
const store = createStore(reducer, {}, enhancer) 
window.store = store;

export default store;