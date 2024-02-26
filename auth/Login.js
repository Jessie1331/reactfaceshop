import { Link, useNavigate } from "react-router-dom";
import "./auth.css"
import '../auth/auth.css'
import React from "react"
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth } from "../../components/firebase/config";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
    toast.success('Login Successful')
    useNavigate('/')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();


    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true)
 

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setIsLoading(false)
      toast.success('Login Successfull')
      navigate('/')
      // ...
    })
    .catch((error) => {
        setIsLoading(false)
    toast.error(error.message)
    });
   };
    return  (
    <section className='auth'>

        <div className='img'>
         <img src={'https://th.bing.com/th/id/OIP.Xus7nMLpOsliDDn2Fyf8kQHaE7?w=270&h=180&c=7&r=0&o=5&pid=1.7'} alt='LOGIN' className='img'/>
        </div>

    
         <div className='form card'>
            <h2 className="h2">Login</h2>
            
        <form onSubmit={loginUser}>

            <input type='text' placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder="Password"
            required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className="--btn --btn-primary --btn-block">Login</button>
       <div className='links'>
        <Link to="/reset">Reset Password</Link>
       </div>
       <p>-- or --</p>
        
        <button className="--btn --btn-danger --btn-block"> <FaGoogle color='#fff'onClick={signInWithPopup}/> Login With Google</button>
<span className='register'>
    <p >Dont Have An Account?</p>
    <Link to='/register'>Register</Link>
</span>
        </form>
        </div>
      
    </section>)
};

export default Login;