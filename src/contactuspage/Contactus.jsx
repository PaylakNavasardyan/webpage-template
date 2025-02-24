import React, { useRef, useState } from 'react';
import classes from './Contactus.module.css';
import image from '../exportImages/ExportImage';

export default function Contactus() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {            
            alert("Success", res);

            setUserName('');
            setEmail('');
            setTextArea('');
        } else {
            alert("We have an error. Please try again!");
        };
      };

    return (
        <div className={classes.contactUsPage}>
            <div className={classes.contactUsPageGuide}>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
            <div className={classes.contactuspageContacts}>
                <div className={classes.contactuspageContactsContact}>
                    <div className={classes.contactuspageContactsContactSocial}>
                        <div className={classes.iconBorder}>
                            <img src={image.home} alt='contact-icon' />
                        </div> 
                        <div className={classes.iconBorderText}>
                            <h3>Address</h3>
                            <a href='https://maps.app.goo.gl/b1Enx1QHyHETHWGh9' target='_blank' rel="noopener noreferrer">Our office in map</a>
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

                <div className={classes.contactuspageContactsMessage}>
                    <h3>Send Message</h3>
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            name="user_name" 
                            placeholder='Full Name' 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required />
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <textarea 
                            name="message"
                            placeholder='Type your Message..' 
                            value={textArea}
                            onChange={(e) => setTextArea(e.target.value)}
                            required>
                        </textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}