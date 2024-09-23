import './style.css'
import tickitz from '/Users/user/Desktop/Fazztrack 2/React Basic/react/src/assets/image/tickitz 1.png'

function Left () {
    return (
        <div className="container-left-sign">
            <img src={tickitz} alt="" />
            <h1 className="hashtag-sign">wait, watch, wow!</h1>
        </div>
    )
}

export default Left
