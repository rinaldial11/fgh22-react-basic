import './style.css'
import tickitzHome from '../../assets/image/Tickitz home.png'

function Nav() {
  return (
    <div className="container-nav">
        <div className="homeList">
            <img src={tickitzHome} alt="tickitz" />
            <span className="listHo">Home</span>
            <span className="listMov">List Movie</span>
        </div>
        <div className="signBut">
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav