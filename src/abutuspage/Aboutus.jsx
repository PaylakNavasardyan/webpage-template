import React from 'react';
import image from '../exportImages/ExportImage';
import classes from './Aboutus.module.css';

export default function Aboutus() {
  return (
    <div className={classes.aboutUsPage}>
      <div className={classes.aboutUsPageOurTeam}>
        <h2>Our Team</h2>

        <img className={classes.aboutUsPageOurTeamImageOne} src={image.teamimage2} alt='employees photo' />

        <div className={classes.aboutUsPageOurTeamImage}>
            <img className={classes.aboutUsPageOurTeamImageTwo} src={image.teamimage1} alt='employees photo' />
            <img className={classes.aboutUsPageOurTeamImageThree} src={image.teamimage3} alt='employees photo' />
        </div>

        <img className={classes.aboutUsPageOurTeamImageFour} src={image.teamimage4} alt='employees photo' />
      </div>

      <div className={classes.aboutUsPageGuide}>
        <h2 id='learnMore'>Introduce Your Product Quickly & Effectively</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt quia quam, exercitationem officiis eos iure sit fugit architecto eum illum quasi ducimus accusamus, delectus beatae animi veniam ipsa. Provident dolorem veniam quasi ipsam, vitae beatae praesentium qui possimus consectetur ? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid distinctio maiores commodi animi expedita provident aliquam, suscipit architecto unde repudiandae dignissimos tenetur, deleniti vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat, itaque, perferendis velit et pariatur facere quisquam quibusdam, ex debitis sint. Iure ipsum voluptas ipsam.</p>
      </div>
    </div>
  )
}