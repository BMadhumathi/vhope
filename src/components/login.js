
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function Form() {
 
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const [error, setError] = useState(false);
 
 
  const handleName = (e) => {
    setName(e.target.value);
  
  };
 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  
  };
 
  const handlePassword = (e) => {
    setPassword(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
     
      setError(false);
    }
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display:
           error ? '' : 'none',
        }}>
        <label >Please enter all the fields</label>
        </div>
        );
    };
    
    return (
    <div className="form">
      <div className='title'>
      </div>
      
      
      <div className="messages">
      {errorMessage()}
      
      </div>
      
      <form 
      className='App'>
      
      <h1>WELCOME BACK!</h1>
  
        <label className="label" >Name</label>
        <input onChange={handleName} className="input" placeholder="username"
          value={name} type="text" name='name'  required/>
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" placeholder='user mail'
          value={email} type="email" name='email' required />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" placeholder='password'
          value={password} type="password" name='password' required/><br></br>
          <Link to="/">
          <Button onClick={handleSubmit} className="btn" type="submit" >
             Login
          </Button>
          
          </Link>
      </form>
    </div>
  );
}