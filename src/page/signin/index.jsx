import './style.css'
import Left from '../../component/left'
import RightSignin from '../../component/right-signin'

function Signin () {
    return (
        <div className="container-sign">
            <Left />
            <RightSignin />
        </div>
    )
}

export default Signin