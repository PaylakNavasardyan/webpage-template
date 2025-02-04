import React, { useState } from 'react';
import classes from './Login.module.css';
import image from '../exportImages/ExportImage';
import { useNavigate } from 'react-router-dom';

async function sendPost(userName, password, navigate) {
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "error");
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log("login succesfull", data);
        navigate('/products')
    } catch (error) {
        console.error("error:", error.message);
    }
}

async function registerUser(userName, email, password) {
    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, email, password })
        });

        const data = await response.json();
        document.cookie = 'register=data.token'
        console.log(data.message);
    } catch (error) {
        console.error("error:", error.message);
    }
}

export default function Login() {
    const navigate = useNavigate('')

    const [action, setAction] = useState('');

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
        
    const addClass = () => {
        setAction('active')
    }

    const deleteClass = () => {
        setAction('')
    }
        
    const handleUserNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setUserName(value);
        }
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9@.]*$/.test(value)) {
            setEmail(value);
        }
    }

    const hadlePasswordChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9_-]*$/.test(value)) {
            setPassword(value);
        }
    }

  return (
    <div className={`${classes.loginPage} ${action ? classes.active : ''}`}>        
        <div className={classes.loginPageBorder}>
            <h2>Login</h2>

            <div className={classes.loginPageInputs}>  
                <div className={classes.loginPageInputsInput}>  
                    <input 
                        type="text" 
                        placeholder='Username' 
                        value={userName}
                        onChange={handleUserNameChange}
                        required 
                    />
                    <img src={image.user} alt='icon'/>
                </div>

                <div className={classes.loginPageInputsInput}>  
                    <input 
                        type="password"
                        placeholder='Password' 
                        value={password}
                        onChange={hadlePasswordChange}
                        required 
                    />
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
            
            <button onClick={() => {sendPost(userName, password, navigate)}}>Login</button>           

            <div className={classes.loginPageAccount}>
                <span>Don't have an account?</span>
                <a href="#" onClick={addClass}>Register</a>
            </div>
        </div>

        <div className={classes.registerPageBorder}>
            <h2>Register</h2>

            <div className={classes.loginPageInputs}>  
                <div className={classes.loginPageInputsInput}>  
                    <input 
                        type="text" 
                        placeholder='Username' 
                        value={userName}
                        onChange={handleUserNameChange}
                        required 
                    />
                    <img src={image.user} alt='icon'/>
                </div>

                <div className={classes.loginPageInputsInput}>  
                    <input 
                        type="email" 
                        placeholder='Email' 
                        value={email}    
                        onChange={handleEmailChange}
                        required 
                    />
                    <img src={image.email} alt='icon'/>
                </div>

                <div className={classes.loginPageInputsInput}>  
                    <input 
                        type="password"  
                        placeholder='Password' 
                        value={password}   
                        onChange={hadlePasswordChange}   
                        required 
                    />
                    <img src={image.lock} alt='icon'/>
                </div>
            </div>

            <div className={classes.loginPageRememberPassword}>
                <label>
                    <input type='checkbox'></input>
                    <span>I agree to the terms & conditions</span>
                </label>
            </div>        
            
            <button onClick={() => registerUser(userName, email, password)}>Register</button>

            <div className={classes.loginPageAccount}>
                <span>Already have an account?</span>
                <a href="#" onClick={deleteClass}>Login</a>
            </div>
        </div>
    </div>
  )
}