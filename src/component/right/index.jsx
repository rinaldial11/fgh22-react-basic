
import './style.css'

function Right () {
    return (
        <div className="container-right-sign">
            <h1 className="headSign">Sign Up</h1>
            <span className="headSign2">Fill your additional details</span>
            <form className="inputForm">
                <label htmlFor="first name">First Name</label>
                <input type="text" name='first name' placeholder='First Name' />
                <label htmlFor="last name">Last Name</label>
                <input type="text" name='last name' placeholder='Last Name' />
                <label htmlFor="phone number">Phone Number</label>
                <input type="number" name='phone number' placeholder='Phone Number' />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className='password' placeholder='Password' />
                <button className='signBut'>Sign Up</button>
            </form>
            <div className="footSign">
                <span>Already have account ? </span>
                <a className="signLink" href='/src/page/signin'>Sign In</a>
            </div>
        </div>
    )
}

export default Right