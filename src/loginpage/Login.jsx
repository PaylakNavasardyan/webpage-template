import React, {useState} from 'react';
import classes from './Login.module.css';
import image from '../exportImages/ExportImage';

export default function Login() {
    const [action, setAction] = useState('');

    const addClass = () => {
        setAction('active')
    }

    const deleteClass = () => {
        setAction('')
    }

  return (
    <div className={`${classes.loginPage} ${action ? classes.active : ''}`}>
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
                <a href="#" onClick={addClass}>Register</a>
            </div>
        </div>

        <div className={classes.registerPageBorder}>
            <h2>Register</h2>

            <div className={classes.loginPageInputs}>  
                <div className={classes.loginPageInputsInput}>  
                    <input type="text" placeholder='Username' required />
                    <img src={image.user} alt='icon'/>
                </div>

                <div className={classes.loginPageInputsInput}>  
                    <input type="email" placeholder='Email' required />
                    <img src={image.email} alt='icon'/>
                </div>

                <div className={classes.loginPageInputsInput}>  
                    <input type="password"  placeholder='Password' required />
                    <img src={image.lock} alt='icon'/>
                </div>
            </div>

            <div className={classes.loginPageRememberPassword}>
                <label>
                    <input type='checkbox'></input>
                    <span>I agree to the terms & conditions</span>
                </label>
            </div>        
            
            <button>Register</button>

            <div className={classes.loginPageAccount}>
                <span>Already have an account?</span>
                <a href="#" onClick={deleteClass}>Login</a>
            </div>
        </div>
    </div>
  )
}