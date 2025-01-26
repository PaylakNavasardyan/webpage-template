import React from 'react'
import classes from './Navbar.module.css'
import { NavLink, Link, Outlet, Route } from 'react-router-dom'
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [deleteMenu, setDeleteMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu((open) => !open);
  };

  const toggleDeleteMenu = () => {
    setOpenMenu(!openMenu);
    if(openMenu) {
      setDeleteMenu(true);
    } 
    setDeleteMenu(false);
  }
 
  return (
    <nav className={classes.webNavbar}>
      <div className={classes.webNavbarTitle}>
        <h3><Link className={classes.webNavbarTitleLink} to='/'>Landing</Link></h3>
      </div>

      <button className={classes.webNavbarLinksMenu} onClick={toggleOpenMenu}>
        <svg viewBox="0 0 24 24" width="32" height="32"><rect y="11" width="24" height="2"/><rect y="4" width="24" height="2"/><rect y="18" width="24" height="2"/></svg>
      </button>

      <div className={`${classes.webNavbarPages} ${openMenu ? classes.webNavbarPagesIsOpen : ''}` }>   
        <button className={`${classes.webNavbarLinksDelete} ${openMenu ? classes.webNavbarLinksDeleteActive : ''}`} onClick={toggleDeleteMenu}>   
          <svg x="0px" y="0px" viewBox="0 0 511.991 511.991" style={{ enableBackground: 'new 0 0 511.991 511.991' }}  width="32" height="32">
            <g>
              <path d="M286.161,255.867L505.745,36.283c8.185-8.474,7.951-21.98-0.523-30.165c-8.267-7.985-21.375-7.985-29.642,0   L255.995,225.702L36.411,6.118c-8.475-8.185-21.98-7.95-30.165,0.524c-7.985,8.267-7.985,21.374,0,29.641L225.83,255.867   L6.246,475.451c-8.328,8.331-8.328,21.835,0,30.165l0,0c8.331,8.328,21.835,8.328,30.165,0l219.584-219.584l219.584,219.584   c8.331,8.328,21.835,8.328,30.165,0l0,0c8.328-8.331,8.328-21.835,0-30.165L286.161,255.867z"/>
            </g>
          </svg>
        </button> 

        <div className={classes.webNavbarLinks}>
          <ul>
            <li><NavLink className={classes.webNavbarLinksLink} to='/'>Home</NavLink></li>
            <li><NavLink className={classes.webNavbarLinksLink} to='/products'>Products</NavLink></li>
            <li><NavLink className={classes.webNavbarLinksLink} to='/about'>About</NavLink></li>
          </ul>  
        </div>        
        <Outlet />

        <div className={classes.webNavbarButtons}>
          <button className={classes.webNavbarButtonsFirstButton}>
            <p className={classes.webNavbarButtonsFirstButtonText}>Purchase UI Kit</p>
          </button>

          <button className={classes.webNavbarButtonsSecondButton}>
            <p className={classes.webNavbarButtonsSecondButtonText}>Contact Us</p>
          </button>
        </div>
      </div>
    </nav>
  )
}