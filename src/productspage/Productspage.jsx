import React from 'react';
import image from '../exportImages/ExportImage';
import classes from './Pruductspage.module.css';

export default function Productspage() {
  return (
    <div className={classes.productPage}>
        <div className={classes.productPageGuide}>
            <div className={classes.productPageGuideText}>
                <h2>Design & Build Your Own Landing Pages</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur adipisci officiis harum eveniet repellendus hic dolor qui assumenda voluptas consectetur labore delectus necessitatibus tenetur dignissimos reprehenderit, est earum enim beatae soluta esse. <br /> <br />Iste soluta incidunt natus enim laudantium sapiente nesciunt, corporis, veritatis adipisci dicta molestiae. Ullam quos iure sapiente.</p>
            </div>

            <div className={classes.productPageGuideTitles}>
                <div className={classes.productPageGuideTitlesTitle}>    
                    <img src={image.icon} alt='Icon'/>
                    <h3>Title Goes Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur.</p>
                </div>

                <div className={classes.productPageGuideTitlesTitle}>    
                    <img src={image.icon} alt='Icon'/>
                    <h3>Title Goes Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur.</p>
                </div>

                <div className={classes.productPageGuideTitlesTitle}>    
                    <img src={image.icon} alt='Icon'/>
                    <h3>Title Goes Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur.</p>
                </div>

                <div className={classes.productPageGuideTitlesTitle}>    
                    <img src={image.icon} alt='Icon'/>
                    <h3>Title Goes Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur.</p>
                </div>
            </div>
        </div>

        <div className={classes.productPagePhonePicture}>
            <img src={image.phone} alt='phone picture'/>
        </div>
    </div>
  )
}