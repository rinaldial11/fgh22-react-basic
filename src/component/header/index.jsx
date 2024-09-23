import './style.css'
import Menu from '../../assets/image/menu1.png'

function Header() {
  return (
    <div className="container-header">
        <div class="headTag">
            <p className="tagChild">Nearest Cinema, Newest Movie,</p>
            <p className="tagChild1">Find out now!</p>
        </div>
        <img src={Menu} alt="" />
    </div>
  )
}

export default Header