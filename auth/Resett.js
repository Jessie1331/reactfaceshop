import "./auth.css";
import {Link} from "react-router-dom";


const Reset = () =>{
    return(
        <section className="container auth">
            <div className="img">
                <img src={'https://th.bing.com/th/id/OIP.lQa-_EEt4WxWEpQmffK8PQHaE7?w=306&h=204&c=7&r=0&o=5&dpr=1.7&pid=1.7'} alt="reset"className="img"/>
            </div>
            <div className="form">
                <h2 className="hh2">Reset Password</h2>
                <form>                <input type='text' placeholder="Email" required/>
                <button className="--btn --btn-primary --btn-block">Reset Password</button>
                <div className="links">
                    <p>
                        <Link to='/login'>-Login</Link>
                    </p>
                    <p>
                        <Link to='/register'>-Register</Link>
                    </p>

    </div>     </form>
       </div>
        </section>

    )
};
export default Reset;