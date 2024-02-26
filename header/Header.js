import React, { useEffect } from "react"

import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaOpencart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {  onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { auth } from "../../components/firebase/config";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from "../../redux/slice/authSlice";
  
    const logo = (
  
        <div className={styles.logo}>
             <Link to="/">
                <h2>
                    Face<span>Shop</span>.
                </h2>
             </Link>
            </div>
    );
const cart = (
    <span className={styles.cart}>
    <Link to='cart'>Cart
    <FaOpencart />
    
    </Link>
</span>


);
const activeLink = ({isActive}) => ( isActive ? `${styles.active}` : '')

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [displayName, setDisplayName] = useState('');
 const  navigate = useNavigate();
 const dispatch =useDispatch();
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          if (user.displayName == null){
            const u1 = user.email.slice(0, -10);
            const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
            setDisplayName(uName);

          }else{
          setDisplayName = (user.displayName);
          }
          dispatch(SET_ACTIVE_USER({
            email:user.email,
            userName:user.displayName ? user.displayName: displayName,
            userID:user.uid,
          }))
          // ...
        } else {
            setDisplayName('');
          // User is signed out
          // ...
        }
      });

}, []);
    const toggleMenu = () => {
        setShowMenu(!showMenu)

    };
  
    const  hideMenu = () => {
        setShowMenu(false)
    };
    const logoutUser= () =>{
        signOut(auth).then(() => {
            toast.success('logout successfully')
            navigate('/');
            // Sign-out successful.
          }).catch((error) => {
            toast.error(error.message)
          });
    };
    return( <header>
        <div className={styles.header}>
            {logo}

            <nav className={showMenu ? `${styles["show-nav"]}`
            : `${styles['hide-nav']}`}>
                <div className={showMenu ? `${styles['nav-wrapper']} : ${styles['show-nav-wrapper']}`
                : `${styles['nav-wrapper']}`} onClick={hideMenu}>
      
                </div>
                <ul onClick={hideMenu}>
                    <li className={styles['logo-mobile']}>{logo}
                    <FaTimes size={22} color="#fff" onClick={hideMenu}/>
                 </li>
                 
                    <li>
                        <NavLink to='/' className={activeLink}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                    <NavLink to='/contact'  className={activeLink}>
                            Contact us
                        </NavLink>
                    </li>

                </ul>
                <div className={styles['header-right']} onClick={hideMenu}>
                    <span className={styles.links}>
                        <NavLink to='/login' className={activeLink}>Log In</NavLink>
                     <a href='#'><FaUserCircle size={16}/>Hi, {displayName}</a>
                        <NavLink to="/register" className={activeLink}>Register</NavLink>
                       <NavLink to='/order-history' className={activeLink}>My Orders</NavLink>
                       <NavLink to='/' onClick={logoutUser}>LogOut</NavLink>
                     </span>
               {cart}
                     
                 
                </div>
                
            </nav>
            <div className={styles["menu-icon"]}>
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>


            </div>
        </div>
    </header>);
};



export default Header;