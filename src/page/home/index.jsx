import './style.css'
import Nav from '../../component/nav'
import Header from '../../component/header'
import Main from '../../component/main'
import Aside from '../../component/aside'
import Section from '../../component/section'
import Footer from '../../component/footer'

function Home() {
    return (
        <div className="container-home">
            <Nav />
            <Header />
            <Main />
            <Aside />
            <Section />
            <Footer />
        </div>
    )
}

export default Home