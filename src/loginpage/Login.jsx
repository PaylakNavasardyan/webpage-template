import React from 'react';
import classes from './Login.module.css';
import image from '../exportImages/ExportImage';

export default function Login() {
  return (
    <div className={classes.loginPage}>
        <div className={classes.loginPageBorder}>
            <h2>Login</h2>

            <div className={classes.loginPageInputs}>  
                <div className={classes.loginPageInputsInput}>  
                    <input type="text" placeholder='Username' required />
                    <img src={image.user} alt='icon'/>
                </div>

                <div className={classes.loginPageInputsInput}>  
                    <input type="password"  placeholder='Password' required />
                    <img src={image.lock} alt='icon'/>
                </div>
            </div>

            <div className={classes.loginPageRememberPassword}>
                <label>
                    <input type='checkbox'></input>
                    <span>Remember me</span>
                </label>
                
                <a href="#">Forgot password</a>
            </div>        

            
            <button>Login</button>
           

            <div className={classes.loginPageAccount}>
                <span>Don't have an account?</span>
                <a href="#">Register</a>
            </div>
        </div>
    </div>
  )
}