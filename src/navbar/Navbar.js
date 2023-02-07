import React from 'react'
import itsTrickyLogo from '../itsTrickyLogo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='nav_div'>
            <ul className='user_navbar'>
                <li>
                    <img src={itsTrickyLogo} alt="Its Tricky Logo" height="100"></img>
                </li>
                <li>
                    <Link to="/tricks">Tricks</Link>
                </li>
                <li>
                    <Link to="/dogs">My Dogs</Link>
                </li>
                <li>
                    <Link to="/trick_form">Add a new trick</Link>
                </li>
                {
                    localStorage.getItem("tricky_user")
                        ? <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("tricky_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : ""
                }
            </ul>
        </div>
    )
}
