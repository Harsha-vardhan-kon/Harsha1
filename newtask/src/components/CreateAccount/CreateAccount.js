import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setIsValid(true);
            console.log('Passwords match!');
        } else {
            setIsValid(false);
            console.log('Passwords do not match!');
        }
    };

    return (
        <div>
            <h1 style={{textAlign:"center"}}>CREATE Account</h1>
            <form style={{ border: '2px solid black', padding: '20px', width: '200px', margin: '50px auto' }}onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' /><br />
                <input type='text' placeholder='Last Name'  /><br />
                <input type='email' placeholder='Email'  /><br />
                <input type='password' placeholder='Password' value={password}onChange={handlePasswordChange}/><br />
                <input type='password'  placeholder='Confirm Password' value={confirmPassword}onChange={handleConfirmPasswordChange} /><br />
                <button style={{textAlign:"justify"}}type='submit'>Create Account</button><br />
            <Link to='/'  ><button>Login</button></Link>  
                {!isValid && <p style={{color: 'red'}}>Passwords do not match!</p>}
            </form>
            
        </div>
    );
};

export default CreateAccount;
