import "./auth.css"
import {useState} from 'react';

import { Link, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/firebase/config";
import Loaderr from "../../components/loader/Loaderr";



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate()
const registerUser = (e) => {
        e.preventDefault()
        if (password !== cPassword){
            toast.error('Passwords do not match');

        }
        setIsLoading(true)

     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success('Registration Successful')
    navigate('/login')
    // ...
  })
  .catch((error) => {

   
    setIsLoading(false)
    navigate('/register')
  
  });

    };
    return (
        <>
        <ToastContainer/>
        {isLoading && <Loaderr/>}
        <section className='auth'>
    
     
    
        
             <div className='form '>
                <h2 className="h2">Register</h2>
                
            <form onSubmit={registerUser}>
    
                <input type='text' placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type='password' placeholder="Password"
                required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <input type='password' placeholder="Confirm Password"
                required value={cPassword} onChange={(e)=>setCPassword(e.target.value)}/>
                <button type='submit' className="--btn --btn-primary --btn-block hover">Register</button>
        
           <p>-- or --</p>
            
         <span className='register'>
        <p >Already have an account?</p>
        <button className="--btn  hover block"><Link to='/login'>Login</Link></button>
    </span>
            </form>
            </div>
            <div className='rimg'>
             <img src={'https://th.bing.com/th/id/OIP.dM-AAeyosQmo4sX8ZzxZ9AHaHa?w=231&h=204&c=7&r=0&o=5&dpr=1.7&pid=1.7'}alt='LOGIN' className='img'/>
            </div>
        </section>
        </>)
};

export default Register;