import React, { useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { Usercontext } from '../App'
const NavBar = () => {
    const { state, dispatch } = useContext(Usercontext)
    const history = useHistory() 
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/">Home</Link></li>,
                <li><Link to="/about">About</Link></li>,
                <li><Link to="/candidateinfo">Candidate Info</Link></li>,
                <li><Link onClick={() => {
                    localStorage.clear()
                    dispatch({ type: "CLEAR" })
                    history.push('/')
                }} >Logout</Link></li>,
            ]
        }
        else {
            return [
                <li><Link to="/">Home</Link></li>,
                <li><Link to="/about">About</Link></li>,
                <li><Link to="/login">Login</Link></li>,
            ]
        }
    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <Link to="/" className="brand-logo left">TCE</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar