import React from "react"
import {Link} from "react-router-dom"

const Nav =()=>{
    return(
        <div className="navbar" >
            <div className="contents">
                <ul className="navbarItems">
                    <Link to="/home"><li>MOVIES API</li></Link>
                    <Link to="/home"><li>HOME</li></Link>
                    <Link to="/search"><li>SEARCH</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav