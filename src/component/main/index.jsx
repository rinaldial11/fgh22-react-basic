import './style.css'
import Spiderman from '../../assets/image/spider man.png'
import Lionking from   '../../assets/image/lion king.png'
import Johnwick from '../../assets/image/john wick.png'

function Main() {
  return (
    <div className="container-main">
        <div class="mainChild">
            <div class="mainGchild">
                <span class="nowShow">Now Showing</span>
            </div>
            <span class="viewAll">view all</span>
        </div>
        <div class="mainChild1">
            <img src={Spiderman} alt="Spiderman" />
            <img src={Lionking} alt="Lion King" />
            <img src={Johnwick} alt="John Wick" />
            <img src={Spiderman} alt="Spiderman" />
            <img src={Lionking} alt="Lion King" />
            <img src={Johnwick} alt="John Wick" />
            <img src={Spiderman} alt="Spiderman" />
            <img src={Lionking} alt="Lion King" />
            <img src={Johnwick} alt="John Wick" />
            <img src={Spiderman} alt="Spiderman" />
            <img src={Lionking} alt="Lion King" />
            <img src={Johnwick} alt="John Wick" />
        </div>
    </div>
  )
}

export default Main