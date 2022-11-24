
import React, { useState } from 'react';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);  
const formHandler=(event)=>{
    event.preventDefault();
    
    const obj={
        firstName:firstName,
        lastName:lastName,
        password:password,
        email:email
        }
        if (firstName === '' || lastName===''||email === '' || password === '') {
            
          } else {
            setSubmitted(true);
            
          }
console.log(obj);
    //axios.post(ur1/obj);
}
const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1  className="success">You've successfully created an Account!!</h1>
      </div>
    );
  };
  return (
    <div>
         <div>
        {successMessage()}
        </div>
    <form onSubmit={formHandler} className='SApp'>
  <h1>Signup to join the fam!</h1>
  <h4>Giving is Living:)</h4>
    <label className="label" >FirstName</label>
      <input type="text" name="firstName"
        value={firstName} className="input"
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        required
      /><br></br>
      <label className="label" >LastName</label>
      <input value={lastName} className="input"
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      /><br></br>
      <label className="label">Email</label>
       <input value={email} className="input"
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      /><br></br>
      <label className="label">Password</label>
      <input value={password} className="input"
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      /><br></br>
      <label className="label">Confirm Password</label>
      <input value={cpassword} className="input"
        onChange={e => setcPassword(e.target.value)}
        placeholder="Confirm Password"
        type="password"
        name="cpassword"
        required
      /><br></br>
      <h6>by clicking on create Account, you agree to Vhope's 
      <a href='http://127.0.0.1:3001/src/components/term.html'> terms and conditons</a></h6>
      <button type="submit">Create Account</button><br></br>
      <hr></hr>
      <a href='http://localhost:3000/login'>Already in Vhope?</a>
      <h6>~</h6>

    </form>
    </div>
  );
}
export default SignUpForm;
