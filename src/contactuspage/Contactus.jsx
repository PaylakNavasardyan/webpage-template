import React from 'react';
import classes from './Contactus.module.css';
import image from '../exportImages/ExportImage';

export default function Contactus() {
  return (
    <div className={classes.contactUsPage}>
        <div className={classes.contactUsPageGuide}>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore, deserunt repudiandae dignissimos eum minus sunt sapiente fugit, mollitia rem similique? Voluptate in eum consequatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolores non eum praesentium deserunt! Libero facilis accusamus necessitatibus quae voluptatum.</p>
        </div>
        <div className={classes.contactuspageContacts}>
            <div className={classes.contactuspageContactsContact}>
                <div className={classes.contactuspageContactsContactSocial}>
                    <div className={classes.iconBorder}>
                        <img src={image.home} alt='contact-icon'/>
                    </div> 

                    <div className={classes.iconBorderText}>
                        <h3>Address</h3>
                        <a href='https://maps.app.goo.gl/b1Enx1QHyHETHWGh9' target='_blank'>Our office in map</a>
                    </div>
                </div>

                <div className={classes.contactuspageContactsContactSocial}>
                    <div className={classes.iconBorder}>
                        <img src={image.phoneCall} alt='contact-icon' />
                    </div>
                    
                    <div className={classes.iconBorderText}>
                        <h3>Phone</h3>
                        <a href='tel:03824243891' target='_blank'>038-24-24-38-91</a>     
                    </div>  
                </div>

                <div className={classes.contactuspageContactsContactSocial}> 
                    <div className={classes.iconBorder}>
                        <img src={image.email} alt='contact-icon' />   
                    </div>

                    <div className={classes.iconBorderText}>    
                        <h3>Email</h3>    
                        <a href="https://www.gmail.com/" target='_blank'>landing@gmail.com</a>
                    </div> 
                </div>
            </div>

            <div className={classes.ContactuspageContactsMessage}>
                <h3>Send Message</h3>
                <form>
                    <input type="text" placeholder='Full Name' required/>
                    <input type="email" placeholder='Email' required/>
                    <textarea placeholder='Type your Message..' required></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}