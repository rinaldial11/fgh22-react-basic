import './style.css'
import Signup from '../../page/signup'

function RightSignin () {
    return (
        <div className="container-right-sign">
            <h1 className="headSign">Sign In</h1>
            <span className="headSign2">Sign in with your data that you entered during your registration</span>
            <form className="inputForm">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className='password' placeholder='Password' />
                <button className='signBut'>Sign Up</button>
            </form>
            <div className="footSign">
                <span>Forgot your password? </span>
                <a className="signLink" href="url">Reset Now</a>
            </div>
            <div className="footSign">
                <span>Don't have an account? </span>
                <a className="signLink" href=''>Sign Up</a>
            </div>
        </div>
    )
}

export default RightSignin