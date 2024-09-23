import './style.css'
import Tickitz from '../../assets/image/Tickitz home.png'
import Ebu from '../../assets/icon/ebu.png'
import Cine from '../../assets/icon/cine.png'
import Hiflix from '../../assets/icon/hiflix.png'
import Fb from '../../assets/icon/fb.png'
import Ig from '../../assets/icon/ig.png'
import Twitter from '../../assets/icon/twitter.png'
import Yt from '../../assets/icon/yt.png'

function Footer() {
  return (
    <div className="container-footer">
        <div className="footerHome">
            <div className="footerHome1">
                <img src={Tickitz} alt="Tickitz" />
                <span className="footerTag">Stop waiting in line. Buy tickets</span>
                <span className="footerTag">conveniently, watch movies quietly.</span>
            </div>
            <div className="footerHome2">
                <span className="footerNav">Explore</span>
                <div className="footerNavChild3">
                    <span className="footerNavChild">Home</span>
                    <span className="footerNavChild">List Movie</span>
                </div>
            </div>
            <div className="footerHome3">
                <span className="footerNav">Our Sponsor</span>
                <div className="footerNavChild3">
                    <img src={Ebu} className="sponsor" alt="ebu.id" />
                    <img src={Cine} className="sponsor1" alt="cineone" />
                    <img src={Hiflix} className="sponsor2" alt="hiflix" />
                </div>
            </div>
            <div className="footerHome4">
                <span className="footerNav">Follow us</span>
                <div className="footerNavChild3">
                    <div className="footerNavChild1">
                        <img src={Fb} alt="fb" />
                        <span className="footerNavChild2">Tickitz Cinema id</span>
                    </div>
                    <div className="footerNavChild1">
                        <img src={Ig} alt="ig" />
                        <span className="footerNavChild2">tickitz.id</span>
                    </div>
                    <div className="footerNavChild1">
                        <img src={Twitter} alt="twitter" />
                        <span className="footerNavChild2">tickitz.id</span>
                    </div>
                    <div className="footerNavChild1">
                        <img src={Yt} alt="yt" />
                        <span className="footerNavChild2">Tickitz Cinema id</span>
                    </div>
                </div>
            </div>
        </div>
        <span className="copyright">© 2020 Tickitz. All Rights Reserved.</span>
    </div>
  )
}

export default Footer