import React from "react"
import Articles  from "./routers/Articles"
import {Provider} from "react-redux"
import store from "../store"
import NotFound from "./NotFound/NotFound"
import CommentsPage  from "./routers/CommentsPage"
import {Route, NavLink, Switch, Redirect } from "react-router-dom"
import history from "../history"
import {ConnectedRouter} from "react-router-redux"
import Menu from "./Menu/Menu"
import Home from "./Home/Home"
export default class App extends React.Component
{
    
    render()
    {
        
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Menu/>
                        <Switch>
                            <Route path="/" component = {Home} exact/>
                            <Route path="/articles" component = {Articles}/>
                            <Route path="/comments" component = {CommentsPage}/>
                            <Route path="*" component={NotFound}/> 
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
         );
    };
    
};