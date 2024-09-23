import './style.css'
import Blackwidow from '../../assets/image/black widow.png'
import Witches from '../../assets/image/witches.png'
import Tenet from '../../assets/image/tenet.png'

function Aside() {
  return (
    <div className="container-aside">
        <div className="asideChild">
            <div className="asideGchild">
                <span className="upcoming">Upcoming Movies</span>
            </div>
            <span className="viewAll">view all</span>
        </div>
        <div className="monthBut">
            <button className="septBut">September</button>
            <button className="otherBut"> October </button>
            <button className="otherBut">November</button>
            <button className="otherBut">December</button>
            <button className="otherBut"> January </button>
            <button className="otherBut">February</button>
            <button className="otherBut">  March  </button>
            <button className="otherBut">  April  </button>
            <button className="otherBut">   May   </button>
            <button className="otherBut">  June  </button>
            <button className="otherBut">  July  </button>
            <button className="otherBut"> August </button>
        </div>
        <div className="asideChild1">
            <div className="asideGchild1">
                <img src={Blackwidow} alt="blackwidow" />
                <span className="movTittle">Black Widow</span>
                <span className="movGenre">Action, Adventure, Sci-Fi</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Witches} alt="witches" />
                <span className="movTittle">The Witches</span>
                <span className="movGenre">Adventure, Comedy, Family</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Tenet} alt="tenet" />
                <span className="movTittle">Tenet</span>
                <span className="movGenre">Action, Sci-Fi</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Blackwidow} alt="blackwidow" />
                <span className="movTittle">Black Widow</span>
                <span className="movGenre">Action, Adventure, Sci-Fi</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Witches} alt="witches" />
                <span className="movTittle">The Witches</span>
                <span className="movGenre">Adventure, Comedy, Family</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Tenet} alt="tenet" />
                <span className="movTittle">Tenet</span>
                <span className="movGenre">Action, Sci-Fi</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Blackwidow} alt="blackwidow" />
                <span className="movTittle">Black Widow</span>
                <span className="movGenre">Action, Adventure, Sci-Fi</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Witches} alt="witches" />
                <span className="movTittle">The Witches</span>
                <span className="movGenre">Adventure, Comedy, Family</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Tenet} alt="tenet" />
                <span className="movTittle">Tenet</span>
                <span className="movGenre">Action, Sci-Fi</span>
                <button>Details</button>
            </div>
            <div className="asideGchild1">
                <img src={Blackwidow} alt="blackwidow" />
                <span className="movTittle">Black Widow</span>
                <span className="movGenre">Action, Adventure, Sci-Fi</span>
                <button>Details</button>
            </div>
        </div>
    </div>
  )
}

export default Aside