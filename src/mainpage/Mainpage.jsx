import React from 'react';
import image from '../exportImages/ExportImage';
import classes from './Mainpage.module.css';
import { HashLink } from 'react-router-hash-link';
import { NavLink, Outlet } from 'react-router-dom';

export default function Mainpage() {
  return (
    <div className={classes.mainPage}>
      <div className={classes.mainPageStart}>
        <div className={classes.mainPageStartGuide}>
          <h1>Introduce Your Product <br /> Quickly & Effectively</h1>

          <p className={classes.largeP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt quia quam, exercitationem officiis eos iure sit fugit architecto eum illum quasi ducimus accusamus, delectus beatae animi veniam ipsa.<br /><br /> Provident dolorem veniam quasi ipsam, vitae beatae praesentium qui possimus consectetur ?</p>

          <div className={classes.mainPageStartButtons}>
            <NavLink to='/LogIn'>
              <button className={classes.mainPageStartFirstButton}><p className={classes.mainPageStartFirstButtonText}>Purchase UI Kit</p></button>
            </NavLink>
            <HashLink smooth to='/about#learnMore'>
              <button className={classes.mainPageStartSecondButton}>
                <p className={classes.mainPageStartSecondButtonText}>
                Learn More </p>
              </button>
            </HashLink>
          </div>
        </div>

        <div className={classes.mainPageStartImage}>
          <img src={image.firstMainPicture}  alt='Main Picture'/>
        </div>
      </div>

      <div className={classes.mainPageSecond}>
        <div className={classes.mainPageSecondGuide}>
          <div className={classes.mainPageSecondGuideText}>
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt quia quam, exercitationem officiis eos iure sit fugit architecto eum illum quasi ducimus accusamus.<br /><br /> Provident dolorem veniam quasi ipsam, vitae beatae praesentium qui possimus ?</p>
          </div>

          <div className={classes.mainPageSecondTitles}>
            <div className={classes.mainPageSecondTitlesTitle}>
              <img src={image.icon} alt='Icon'/>
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur.</p>
            </div>

            <div className={classes.mainPageSecondTitlesTitle}>
              <img src={image.icon} alt='Icon'/>
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur.</p>
            </div>
          </div>
        </div>

        <div className={classes.mainPageSecondPicture}>
          <img src={image.secondPageBigPicture}  alt='Second Picture'/>
        </div>
      </div>

      <div className={classes.mainPageThird}>
        <div className={classes.mainPageThirdLines}>
          <div className={classes.mainPageThirdPicture}>
            <img src={image.thirdPictureOne} alt='Third Page Picture One'/>
          </div>

          <div className={classes.mainPageThirdGuide}>
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt quia quam, exercitationem officiis eos iure sit fugit architecto eum illum quasi ducimus accusamus.<br /><br /> Provident dolorem veniam quasi ipsam, vitae beatae praesentium qui possimus ?</p>
          </div>
        </div>

        <div className={classes.mainPageThirdLines}>
          <div className={classes.mainPageThirdPicture}>
            <img src={image.thirdPictureTwo} alt='Third Page Picture Two'/>
          </div>

          <div className={classes.mainPageThirdGuide}>
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt quia quam, exercitationem officiis eos iure sit fugit architecto eum illum quasi ducimus accusamus.<br /><br /> Provident dolorem veniam quasi ipsam, vitae beatae praesentium qui possimus ?</p>
          </div>
        </div>

        <div className={classes.mainPageThirdLines}>
          <div className={classes.mainPageThirdPicture}>
            <img src={image.thirdPictureThree} alt='Third Page Picture Three'/>
          </div>

          <div className={classes.mainPageThirdGuide}>
            <h2>Light, Fast & Powerful</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt quia quam, exercitationem officiis eos iure sit fugit architecto eum illum quasi ducimus accusamus.<br /><br /> Provident dolorem veniam quasi ipsam, vitae beatae praesentium qui possimus ?</p>
            
            <NavLink to='/LogIn'>
              <button className={classes.mainPageThirdGuideButton}>Purchase Now</button>
            </ NavLink>          
          </div>
        </div>
      </div>

      <div className={classes.mainPageFinish}>
        <div className={classes.mainPageFinishGradient}></div>

        <div className={classes.mainPageFinishGuide}>
            <h2>A Price To Suit Everyone</h2>
            <p className={classes.mainPageFinishGuideDiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus exercitationem accusantium earum sint, nesciunt ducimus in voluptas corrupti delectus a dolorem rerum, odio possimus!</p>
            <span>$40</span>
            <p className={classes.mainPageFinishGuideUI}>UI Design Kit</p>

            <p className={classes.mainPageFinishGuideMotto}>See, One price. Simple.</p>
            <NavLink to='/LogIn'>
              <button className={classes.mainPageFinishGuideButton}>Purchase Now</button>
            </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
