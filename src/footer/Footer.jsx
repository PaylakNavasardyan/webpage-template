import React from 'react';
import image from '../exportImages/ExportImage';
import classes from './Footer.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Footer() {
  return (
    <div className={classes.mainPageFooter}>
        <div className={classes.mainPageFooterDetails}>
            <p>&copy;2023 Yourcompany</p>
            <h3><Link className={classes.mainPageFooterName} to='/'>Landing</Link></h3>
             <NavLink to='/LogIn'>
                <button className={classes.mainPageFooterButton}>Loge In</button>
            </NavLink>
        </div>
        <Outlet />

        <div className={classes.mainPageFooterLine}></div>

        <div className={classes.mainPageFooterLinks}>
            <div className={classes.mainPageFooterLinksOwn}>
                <ul>
                    <li><Link className={classes.mainPageFooterLinksOwnPages} to='/'>Home</Link></li>
                    <li><Link className={classes.mainPageFooterLinksOwnPages} to='/products'>Products</Link></li>
                    <li><Link className={classes.mainPageFooterLinksOwnPages} to='/about'>About</Link></li>
                    <li><Link className={classes.mainPageFooterLinksOwnPages} to='/contact'>Contact</Link></li>
                </ul>  
            </div>

            <div className={classes.mainPageFooterLinksCenterLine}></div>
            
            <div className={classes.mainPageFooterLinksSocial}>
                <a href="https://www.facebook.com/" target='_blank'><img src={image.Facebook} className={classes.socialIcon} alt='facebook icon'/></a>
                <a href="https://www.instagram.com/" target='_blank'><img src={image.Instagram} className={classes.socialIcon} alt='instagram icon'/></a>
                <a href="https://www.youtube.com/" target='_blank'><img src={image.YouTube} className={classes.socialIcon} alt='youtube icon'/></a>
                <a href="https://www.x.com/" target='_blank'><img src={image.Twitter} className={classes.socialIcon} alt='twitter'/></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={image.LinkedIn} className={classes.socialIcon} alt='linkedin icon'/></a>
            </div>
        </div>
    </div>
  )
}