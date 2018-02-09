import {combineReducers} from "redux"
import articleState from "./articles"
import filters from "./filters"
import comments from "./comments"
import {routerReducer} from "react-router-redux"
export default combineReducers({
articleState,
comments,
filters,
router:routerReducer
})
