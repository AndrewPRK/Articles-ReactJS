import React from "react"
import {NavLink,Link} from "react-router-dom"
export default (props) => {
    return (
        <div className="main-menu">
            <Link className="button-menu" to="/"><h2>Menu</h2></Link>
            <NavLink className="nav-butt-menu" to="/articles" activeStyle={{ color: "blue" }}>Articles</NavLink>
        </div>
    )
}