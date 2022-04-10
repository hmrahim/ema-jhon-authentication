import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const logout = ()=> {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ? <Link onClick={logout} to="/login">Logout</Link> : <Link to="/login">Login</Link>
                }
                
            </div>
        </nav>
    );
};

export default Header;