import React from "react"
import {NavLink} from "react-router-dom"
export default (props) => {
    return (
        <div className="main-menu">
            <h2>Main Menu</h2>
            {/* <div><NavLink to = "/filters" activeStyle={{color:"red"}}>Filters</NavLink></div> */}
            <div><NavLink className="nav-butt-menu" to="/articles" activeStyle={{ color: "blue" }}>Articles</NavLink></div>
        </div>
    )
}