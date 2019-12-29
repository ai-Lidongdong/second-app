
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';
import './styles/Nav.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
            <div>
                <NavLink exact to='/' className="na_link"></NavLink> |&nbsp;
                <NavLink to='/Detail' className="na_link">Detail</NavLink> |&nbsp;
                <NavLink to='/Confirm' className="na_link">Detail</NavLink>
            </div>
                
            </div>
        )
    }
}


// const NavBar = () => (
//     <div>
//         <div>
//             {/* <NavLink exact to='/'></NavLink> |&nbsp;
//             <NavLink to='/Detail'>Detail</NavLink> |&nbsp;
//             <NavLink to='/Confirm'>Detail</NavLink> */}
//         </div>
//     </div>
// )
// export default NavBar;