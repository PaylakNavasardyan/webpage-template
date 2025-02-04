import React from 'react'
import classes from './Purchase.module.css';
import image from '../exportImages/ExportImage';

export default function Purchase() {
  return (
    <div className={classes.purchasePage}>
      <div className={classes.purchasePagePrice}>
        <span>40$</span>
        <p>ORDER YOUR FANTASY</p>
      </div>

      <div className={classes.purchasePageExamples}>
            <span>Order From Here</span>

        <div className={classes.purchasePageExamplesImg}>
            <img src={image.icon} alt='icon'/>
            <img src={image.icon} alt='icon'/>
            <img src={image.icon} alt='icon'/>
            <img src={image.icon} alt='icon'/>
            <img src={image.icon} alt='icon'/>
            <img src={image.icon} alt='icon'/>
        </div>
      </div>
    </div>
  )
}
