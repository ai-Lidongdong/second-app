import React from 'React';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <div>
        <div>
            <NavLink exact to='/'></NavLink> |&nbsp;
            <NavLink to='/Detail'>Detail</NavLink> |&nbsp;
            <NavLink to='/Confirm'>Detail</NavLink>
        </div>
    </div>
)
export default NavBar;