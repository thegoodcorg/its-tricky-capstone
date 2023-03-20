import React, { useEffect, useState } from 'react';
import itsTrickyLogo from '../itsTrickyLogo.png'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {

   
    const location = useLocation();
    const navigate = useNavigate()


    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    
    
    return (
        <div className='nav_div'>
            <ul className='user_navbar'>
                <li>
                    <img 
                    src={itsTrickyLogo} 
                    alt="Its Tricky Logo" 
                    height="100">

                    </img>
                </li>
                <li>
                    <Link 
                    to="/tricks"
                    className={"underline" + (url === "/tricks" ?" active" : "")}>
                    Tricks</Link>
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


// import React, { useEffect, useState } from 'react';
// // Import useLocation hook
// import { Link, useLocation } from 'react-router-dom';

// function NavBar() {
//    // once ready it returns the 'window.location' object

//   // ...
//   return (
//     // ... Just a dumbed down example:
//     <Nav>
//       <Link to="/" className={"underline" + (url === "/" ?" active" : "")}>Home</Link>
//       <Link to="/projects" className={"underline" + (url === "/projects" ?" active" : "")}>Projects</Link>
//       <Link to="/contact" className={"underline" + (url === "/contact" ?" active" : "")}>Contact</Link>
//     </Nav>
//   );
// }
